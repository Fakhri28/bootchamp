import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

import detailUser from '../queries/detailUser';
import updateUser from './updateUser';
import updateUserRoles from './updateUserRoles';

import setUserSettingsByHostToTrue from './setUserSettingsByHostToTrue';
import parseHost from '../../../../../helpers/parseHost';
import getPrivateFile from '../../../../../helpers/server/getPrivateFile';
import handlebarsEmailToHtml from '../../../../../helpers/server/handlebarsEmailToHtml';
import handlebarsEmailToText from '../../../../../helpers/server/handlebarsEmailToText';

import sendWelcomeEmail from '../../utils/sendWelcomeEmail';

import Tenant from '../../../../Tenant/api';

export default {
  updateUser: async (parent, args, context) => {
    await updateUser({
      context,
      args,
    });

    return detailUser({ userIdToQuery: args.user._id || context.user._id, context });
  },

  updateUserRoles: async (parent, args, context) => {
    await updateUserRoles({
      context,
      args,
    });

    return detailUser({ userIdToQuery: args.party._id || context.user._id, context });
  },

  setUserSettingsByHostToTrue: async (root, args, context) =>
    setUserSettingsByHostToTrue({
      context,
      args,
    }),

  sendVerificationEmail: async (parent, args, context) => {
    const { emailTemplates } = Accounts;

    const host = parseHost(context.headers.origin);
    const tenant = Tenant.findOne({ host });

    emailTemplates.siteName = tenant.settings.name;
    emailTemplates.from = tenant.email;

    emailTemplates.verifyEmail = {
      subject() {
        return `[ ${tenant.settings.name} ] Verifikasi Email Anda`;
      },
      html(user, url) {
        const urlHost = parseHost(url);
        const urlWithoutHash = url.replace(urlHost, host).replace('#/', '');
        const urlWithoutHashWithoutLocation = urlWithoutHash.substring(
          0,
          urlWithoutHash.indexOf('/verify-email'),
        );

        if (Meteor.isDevelopment) {
          console.log(`Verify Email Link in html: ${urlWithoutHash}`);
          console.log(
            `logoUrl in html: ${urlWithoutHashWithoutLocation}${tenant.settings.iconUrl}`,
          );
        }

        return handlebarsEmailToHtml(getPrivateFile('email-templates/verify-email.html'), {
          title: 'Verifikasi Email Anda',
          subtitle: `Sebagai langkah pertama verifikasi menjadi anggota ${tenant.settings.name}`,
          logoUrl: `${urlWithoutHashWithoutLocation}${tenant.settings.iconUrl}`,
          productName: host,
          fullname: user.profile.fullname,
          verifyUrl: urlWithoutHash,
        });
      },
      text(user, url) {
        const urlHost = parseHost(url);
        const urlWithoutHash = url.replace(urlHost, host).replace('#/', '');

        if (Meteor.isDevelopment) console.log(`Verify Email Link in text: ${urlWithoutHash}`);

        return handlebarsEmailToText(getPrivateFile('email-templates/verify-email.txt'), {
          productName: host,
          fullname: user.profile.fullname,
          verifyUrl: urlWithoutHash,
        });
      },
    };

    Accounts.sendVerificationEmail(context.user._id);

    return {
      _id: context.user._id,
    };
  },

  forgotPassword: async (parent, args, context) => {
    const userReset = Meteor.users.findOne({ 'emails.address': args.email });
    if (!userReset) throw new Error('Email not valid');

    const { emailTemplates } = Accounts;

    const host = parseHost(context.headers.origin);
    const tenant = Tenant.findOne({ host });

    emailTemplates.siteName = tenant.settings.name;
    emailTemplates.from = tenant.email;

    emailTemplates.resetPassword = {
      subject() {
        return `[${tenant.settings.name}] Reset Your Password`;
      },
      html(user, url) {
        const urlHost = parseHost(url);
        const urlWithoutHash = url.replace(urlHost, host).replace('#/', '');
        const urlWithoutHashWithoutLocation = urlWithoutHash.substring(
          0,
          urlWithoutHash.indexOf('/reset-password'),
        );

        if (Meteor.isDevelopment) {
          console.log(`Reset Password Link in html: ${urlWithoutHash}`);
          console.log(
            `logoUrl in html: ${urlWithoutHashWithoutLocation}${tenant.settings.iconUrl}`,
          );
        } // eslint-disable-line

        return handlebarsEmailToHtml(getPrivateFile('email-templates/reset-password.html'), {
          title: 'Reset Password',
          subtitle: 'Ada permintaan masuk untuk reset password dengan alamat email ini',
          logoUrl: `${urlWithoutHashWithoutLocation}${tenant.settings.iconUrl}`,
          fullname: user.profile.fullname,
          productName: host,
          emailAddress: user.emails[0].address,
          resetUrl: urlWithoutHash,
        });
      },
      text(user, url) {
        const urlHost = parseHost(url);
        const urlWithoutHash = url.replace(urlHost, host).replace('#/', '');

        if (Meteor.isDevelopment) console.log(`Reset Password Link in text: ${urlWithoutHash}`); // eslint-disable-line

        return handlebarsEmailToText(getPrivateFile('email-templates/reset-password.txt'), {
          fullname: user.profile.fullname,
          productName: host,
          emailAddress: user.emails[0].address,
          resetUrl: urlWithoutHash,
        });
      },
    };

    Accounts.sendResetPasswordEmail(userReset._id);

    return {
      _id: userReset._id,
    };
  },

  sendWelcomeEmail: async (parent, args, context) => {
    await sendWelcomeEmail({ user: Meteor.users.findOne(context.user._id), parent, context });

    return {
      _id: context.user._id,
    };
  },
};
