/* eslint-disable no-underscore-dangle */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';

import faker from 'faker';

import Org from '../apps/common/entities/Org/api';
import generateRandomAddress from './generateRandomAddress';

if (Meteor.settings.public.dbReset === 'enforce') {
  console.info('[ FIXTURE REMOVE ] Org', new Date());
  Org.remove({});
}

const orgExist = Org.findOne({});

if ((Meteor.isDevelopment || Meteor.settings.public.dbReset === 'enforce') && !orgExist) {
  console.info('[ FIXTURE START ] Org', new Date());

  let orgTotal = 0;
  const now = new Date();
  const admin = Meteor.users.findOne({ 'emails.address': 'admin@admin.com' });

  const rootOrg = {
    _id: Random.id(),
    nr: 'taxnr123',
    name: 'PT Maya Katalis Cipta Buana',
    shortname: 'MKCB',
    logoUrl: '/common/img/50x50.png',
    address: generateRandomAddress(),
    status: 'Active',
    type: 'Company',
    description: 'Catalyst your Business',
    owner: { _id: admin._id, type: 'Member', name: admin.profile.fullname }, // owner of org is member
    createdAt: now,
    createdBy: admin.profile.fullname,
    updatedAt: now,
    updatedBy: admin.profile.fullname,
  };

  Org._collection.insert(rootOrg);
  orgTotal += 1;

  const users = Meteor.users.find({ _id: { $ne: admin._id } }).fetch();
  users.forEach((user) => {
    const orgCount = 3;
    let orgIndex = 0;
    while (orgIndex < orgCount) {
      const orgName = faker.company.companyName();
      const splitOrgName = orgName.split(' ');

      // we purposely do not add hosts field here, so that admin can add org to host later
      const docOrg = {
        _id: Random.id(),
        nr: faker.phone.phoneNumber(),
        name: orgName,
        shortname: splitOrgName[0].trim(),
        logoUrl: '/common/img/50x50.png',
        address: generateRandomAddress(),
        type: 'Company',
        status: 'Draft',
        description: faker.company.bsBuzz(),
        owner: { _id: user._id, type: 'Member', name: user.profile.fullname },
        createdAt: now,
        createdBy: user.profile.fullname,
        updatedAt: now,
        updatedBy: user.profile.fullname,
      };

      Org._collection.insert(docOrg);
      orgIndex += 1;
      orgTotal += 1;
    }
  });

  console.info(`[ FIXTURE END ] Org added ${orgTotal}`, new Date());
}
