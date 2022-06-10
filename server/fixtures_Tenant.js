/* eslint-disable no-underscore-dangle */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Roles } from 'meteor/alanning:roles';

import Tenant from '../apps/common/entities/Tenant/api';
import Org from '../apps/common/entities/Org/api';

import parseDotToUnderscore from '../apps/common/helpers/parseDotToUnderscore';
import entityUpdate from '../apps/common/helpers/server/entityUpdate';

if (Meteor.settings.public.dbReset === 'enforce') {
  console.info('[ FIXTURE REMOVE ] Tenant', new Date());
  Tenant.remove({});
}

const tenantExist = Tenant.findOne();
if ((Meteor.isDevelopment || Meteor.settings.public.dbReset === 'enforce') && !tenantExist) {
  console.info('[ FIXTURE START ] Tenant', new Date());

  const tenants = [
    {
      _id: Random.id(),
      name: 'Common Application',
      host: 'common.maya',
      email: 'no-reply@common.maya',
      roleStandard: 'user',
      roles: ['user', 'member', 'spv', 'admin'],
      rolesUserInOrg: ['member', 'admin'],
      rolesOrgInTenant: ['member', 'owner'],
      s3RootFolder: 'common.maya',
      type: 'Host',
      status: 'Active',
      settings: {
        name: 'Catalyst Engine',
        description: 'Catalyst Engine Application for your Development',
        motto: 'Catalyst your Development',
        copyright: 'PT Maya Katalis Cipta Buana',
        iconUrl: '/mkcb.ico',
        logoUrl:
          'https://s3-ap-southeast-1.amazonaws.com/gudang.maya.network/mkcb/img/mkcb_logo_small.png',
        logoUrlPopUp: '/mkcb_logo_with_name.png',
        perPage: 12,
        minCharSearch: 3,
        locale: 'id',
        timezone: 'Asia/Jakarta',
        currency: 'IDR',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        orgTypes: ['Company', 'Division', 'Department', 'Other'],
      },
    },
    {
      _id: Random.id(),
      name: 'Example Application',
      host: 'example.maya',
      email: 'no-reply@example.maya',
      roleStandard: 'user',
      roles: ['user', 'member', 'spv', 'admin'],
      rolesUserInOrg: ['member', 'admin'],
      rolesOrgInTenant: ['member', 'owner'],
      s3RootFolder: 'example.maya',
      type: 'Host',
      status: 'Active',
      settings: {
        name: 'Example',
        description: 'Example Application of Catalyst Engine',
        motto: 'Catalyst your Development',
        copyright: 'PT Maya Katalis Cipta Buana',
        iconUrl: '/mkcb.ico',
        logoUrl:
          'https://s3-ap-southeast-1.amazonaws.com/gudang.maya.network/mkcb/img/mkcb_logo_small.png',
        logoUrlPopUp: '/mkcb_logo_with_name.png',
        perPage: 12,
        minCharSearch: 3,
        locale: 'id',
        timezone: 'Asia/Jakarta',
        currency: 'IDR',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        orgTypes: ['Company', 'PersonalMerchant', 'Other'],
      },
    },
    {
      _id: Random.id(),
      name: 'Lelang Application',
      host: 'frontend.lelang.maya',
      email: 'no-reply@lelang.maya',
      roleStandard: 'user',
      roles: ['user', 'member', 'spv', 'admin'],
      rolesUserInOrg: ['member', 'admin'],
      rolesOrgInTenant: ['member', 'owner'],
      s3RootFolder: 'lelang.maya',
      type: 'Host',
      status: 'Active',
      settings: {
        name: 'Lelang',
        description: 'Lelang Frontend Application of Catalyst Engine',
        motto: 'Catalyst your Auction',
        copyright: 'PT Maya Katalis Cipta Buana',
        iconUrl: '/mkcb.ico',
        logoUrl:
          'https://s3-ap-southeast-1.amazonaws.com/gudang.maya.network/mkcb/img/mkcb_logo_small.png',
        logoUrlPopUp: '/mkcb_logo_with_name.png',
        perPage: 12,
        minCharSearch: 3,
        locale: 'id',
        timezone: 'Asia/Jakarta',
        currency: 'IDR',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        orgTypes: ['Company', 'PersonalMerchant', 'Other'],
      },
    },
    {
      _id: Random.id(),
      name: 'Lelang Backoffice Application',
      host: 'backoffice.lelang.maya',
      email: 'no-reply@lelang.maya',
      roleStandard: 'user',
      roles: ['user', 'member', 'spv', 'admin'],
      rolesUserInOrg: ['member', 'admin'],
      rolesOrgInTenant: ['member', 'owner'],
      s3RootFolder: 'lelang.maya',
      type: 'Host',
      status: 'Active',
      settings: {
        name: 'Lelang',
        description: 'Lelang Frontend Application of Catalyst Engine',
        motto: 'Catalyst your Auction',
        copyright: 'PT Maya Katalis Cipta Buana',
        iconUrl: '/mkcb.ico',
        logoUrl:
          'https://s3-ap-southeast-1.amazonaws.com/gudang.maya.network/mkcb/img/mkcb_logo_small.png',
        logoUrlPopUp: '/mkcb_logo_with_name.png',
        perPage: 12,
        minCharSearch: 3,
        locale: 'id',
        timezone: 'Asia/Jakarta',
        currency: 'IDR',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        orgTypes: ['Company', 'PersonalMerchant', 'Other'],
      },
    },
    {
      _id: Random.id(),
      name: 'JCHA Application',
      host: 'jcha.maya',
      email: 'no-reply@lelang.maya',
      roleStandard: 'user',
      roles: ['user', 'member', 'spv', 'admin'],
      rolesUserInOrg: ['member', 'admin'],
      rolesOrgInTenant: ['member', 'owner'],
      s3RootFolder: 'jcha.maya',
      type: 'Host',
      status: 'Active',
      settings: {
        name: 'Lelang',
        description: 'Lelang Frontend Application of Catalyst Engine',
        motto: 'Catalyst your Auction',
        copyright: 'PT Maya Katalis Cipta Buana',
        iconUrl: '/mkcb.ico',
        logoUrl:
          'https://s3-ap-southeast-1.amazonaws.com/gudang.maya.network/mkcb/img/mkcb_logo_small.png',
        logoUrlPopUp: '/mkcb_logo_with_name.png',
        perPage: 12,
        minCharSearch: 3,
        locale: 'id',
        timezone: 'Asia/Jakarta',
        currency: 'IDR',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        orgTypes: ['Company', 'PersonalMerchant', 'Other'],
      },
    },
    {
      _id: Random.id(),
      name: 'Sofi Application',
      host: 'sofi.maya',
      email: 'no-reply@lelang.maya',
      roleStandard: 'user',
      roles: ['user', 'member', 'spv', 'admin'],
      rolesUserInOrg: ['member', 'admin'],
      rolesOrgInTenant: ['member', 'owner'],
      s3RootFolder: 'sofi.maya',
      type: 'Host',
      status: 'Active',
      settings: {
        name: 'Lelang',
        description: 'Lelang Frontend Application of Catalyst Engine',
        motto: 'Catalyst your Auction',
        copyright: 'PT Maya Katalis Cipta Buana',
        iconUrl: '/mkcb.ico',
        logoUrl:
          'https://s3-ap-southeast-1.amazonaws.com/gudang.maya.network/mkcb/img/mkcb_logo_small.png',
        logoUrlPopUp: '/mkcb_logo_with_name.png',
        perPage: 12,
        minCharSearch: 3,
        locale: 'id',
        timezone: 'Asia/Jakarta',
        currency: 'IDR',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        orgTypes: ['Company', 'PersonalMerchant', 'Other'],
      },
    },
    {
      _id: Random.id(),
      name: 'Bootchamp Application',
      host: 'bootchamp.maya',
      email: 'no-reply@lelang.maya',
      roleStandard: 'user',
      roles: ['user', 'member', 'spv', 'admin'],
      rolesUserInOrg: ['member', 'admin'],
      rolesOrgInTenant: ['member', 'owner'],
      s3RootFolder: 'bootchamp.maya',
      type: 'Host',
      status: 'Active',
      settings: {
        name: 'Lelang',
        description: 'Lelang Frontend Application of Catalyst Engine',
        motto: 'Catalyst your Auction',
        copyright: 'PT Maya Katalis Cipta Buana',
        iconUrl: '/mkcb.ico',
        logoUrl:
          'https://s3-ap-southeast-1.amazonaws.com/gudang.maya.network/mkcb/img/mkcb_logo_small.png',
        logoUrlPopUp: '/mkcb_logo_with_name.png',
        perPage: 12,
        minCharSearch: 3,
        locale: 'id',
        timezone: 'Asia/Jakarta',
        currency: 'IDR',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
        orgTypes: ['Company', 'PersonalMerchant', 'Other'],
      },
    },
  ];

  // now add org mkcb as owner of all tenants
  const now = new Date();
  const admin = Meteor.users.findOne({ 'emails.address': 'admin@admin.com' });
  const owner = Org.findOne({ shortname: 'MKCB' });

  tenants.forEach((tenant) => {
    Tenant._collection.insert({
      ...tenant,
      owner: {
        _id: owner._id,
        type: 'Org',
        name: owner.name,
        shortname: owner.shortname,
      },
      createdAt: now,
      createdBy: admin.profile.fullname,
      updatedAt: now,
      updatedBy: admin.profile.fullname,
    });

    tenant.roles.forEach((role) => {
      Roles.createRole(role, { unlessExists: true });
    });
    tenant.rolesUserInOrg.forEach((role) => {
      Roles.createRole(role, { unlessExists: true });
    });
    tenant.rolesOrgInTenant.forEach((role) => {
      Roles.createRole(role, { unlessExists: true });
    });

    // we use Roles to reflect the org roles in the tenant, e.g. owner, merchant, etc
    Roles.addUsersToRoles(`${owner._id}.org`, 'owner', tenant.host);

    // now we inject the host in org to have same behaviour as user in host
    const hostDotToUnderscore = parseDotToUnderscore(tenant.host);
    const doc = {};
    doc[`hosts.${hostDotToUnderscore}`] = {
      status: 'Active',
      createdAt: new Date(),
      createdBy: admin.profile.fullname,
      updatedAt: new Date(),
      updatedBy: admin.profile.fullname,
    };

    entityUpdate(
      Org,
      { _id: owner._id },
      doc,
      'fixture',
      { _id: admin._id, type: 'Member', name: admin.profile.fullname },
      now,
    );
  });

  console.info(`[ FIXTURE END ] Tenant added ${tenants.length}`, new Date());
}
