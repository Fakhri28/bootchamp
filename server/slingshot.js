/* eslint-disable no-param-reassign */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Slingshot } from 'meteor/edgee:slingshot';

import authorizer from '../apps/common/helpers/server/authorizer';

import getFileJSONdefs from '../apps/common/entities/File/api/utils/getJSONdefs';
import parseFIleName from '../apps/common/helpers/parseFIleName';
import createFile from '../apps/common/entities/File/api/server/processors/create';
import entityUpdate from '../apps/common/helpers/server/entityUpdate';

// FIXME [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead
Slingshot.fileRestrictions('saveFileToS3', {
  // allowedFileTypes: /.*/i,
  allowedFileTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
  maxSize: 8 * 1024 * 1024, // 8 MB (use null for unlimited).
});

// FIXME create separate methode for uploading user photos stuffs
Slingshot.createDirective('saveFileToS3', Slingshot.S3Storage, {
  AWSAccessKeyId: Meteor.settings.private.s3.accessKey,
  AWSSecretAccessKey: Meteor.settings.private.s3.secretKey,
  bucket: Meteor.settings.private.s3.bucket,
  acl: 'public-read',
  region: Meteor.settings.private.s3.region || 'ap-southeast-1',
  authorize(file, metaContext) {
    try {
      const options = {
        context: {
          headers: {
            origin: this.connection.httpHeaders.host,
          },
          user: Meteor.user(),
        },
      };

      const { party, tenant } = authorizer(options, 'saveFileToS3', getFileJSONdefs);

      const mimeTypeRoot = file.type.substring(0, file.type.indexOf('/'));
      const fileExtension = file.name.substring(file.name.lastIndexOf('.') + 1);
      const filename = `${
        metaContext.type.includes('User') ? metaContext.type : Random.id()
      }.${fileExtension}`; // TODO end filename for User could be different because of the extension.

      const entity = metaContext.entity || 'User';
      const entityId = metaContext.entityId || party._id;

      const folder = `${Meteor.settings.private.s3.folder}/${entity}/${entityId}/${mimeTypeRoot}/${filename}`;
      const cloudUrl = tenant.s3RootFolder ? `${tenant.s3RootFolder}/${folder}` : folder;

      const docFile = {
        name: parseFIleName(file.name),
        entity,
        entityId,
        cloudUrl: `${Meteor.settings.public.cloudUrl}/${cloudUrl}`,
        size: file.size,
        mimeType: file.type,
        type: metaContext.type,
        status: 'Active',
        refs: metaContext.refs
          ? metaContext.refs
          : [{ _id: party._id, type: 'User', name: party.name }],
      };

      const fileCreated = createFile(docFile, party, tenant);

      // now special case if User Profile PP n User Profile Cover
      if (metaContext.type.includes('User')) {
        const docUser = {};
        docUser[`profile.${metaContext.type}`] = `${Meteor.settings.public.cloudUrl}/${cloudUrl}`;
        entityUpdate(Meteor.users, { _id: entityId }, docUser, `upload ${metaContext.type}`, party);
      }

      if (fileCreated && fileCreated._id) {
        metaContext._id = fileCreated._id;
        metaContext.cloudUrl = cloudUrl;
        return true;
      }

      return false;
    } catch (exception) {
      console.error(`EXCEPTION - saveFileToS3 - userId: ${this.userId}`, exception);
      return false;
    }
  },

  key(file, metaContext) {
    return metaContext.cloudUrl;
  },
});
