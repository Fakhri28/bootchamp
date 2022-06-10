import detailOrg from './detailOrg';
import getOrg from './getOrg';
import getUser from '../../../../User/api/server/queries/getUser';

import listChildOrg from './listChildOrg';

export default {
  detailOrg: async (parent, args, context) =>
    detailOrg({
      context,
      _id: (parent && parent.OrgId) || args._id,
    }),
  getOrg: async (parent, args, context) =>
    getOrg({
      context,
      _id: (parent && parent.OrgId) || args._id,
    }),
  getVendor: async (parent, args, context) => {
    if (!parent || !parent.vendor) return undefined;
    return parent.vendor.type === 'Member'
      ? getUser({
          context,
          _id: parent.VendorId,
        })
      : getOrg({
          context,
          _id: parent.VendorId,
        });
  },
  getBuyer: async (parent, args, context) => {
    if (!parent || !parent.buyer) return undefined;
    return parent.buyer.type === 'Member'
      ? getUser({
          context,
          _id: parent.BuyerId,
        })
      : getOrg({
          context,
          _id: parent.BuyerId,
        });
  },
  getSeller: async (parent, args, context) => {
    if (!parent || !parent.seller) return undefined;
    return parent.seller.type === 'Member'
      ? getUser({
          context,
          _id: parent.SellerId,
        })
      : getOrg({
          context,
          _id: parent.SellerId,
        });
  },
  getCourier: async (parent, args, context) => {
    if (!parent || !parent.courier) return undefined;
    return parent.courier.type === 'Member'
      ? getUser({
          context,
          _id: parent.CourierId,
        })
      : getOrg({
          context,
          _id: parent.CourierId,
        });
  },
  getDebitParty: async (parent, args, context) => {
    if (!parent || !parent.debitParty) return undefined;
    return parent.debitParty.type === 'Member'
      ? getUser({
          context,
          _id: parent.DebitPartyId,
        })
      : getOrg({
          context,
          _id: parent.DebitPartyId,
        });
  },
  getCreditParty: async (parent, args, context) => {
    if (!parent || !parent.creditParty) return undefined;
    return parent.creditParty.type === 'Member'
      ? getUser({
          context,
          _id: parent.CreditPartyId,
        })
      : getOrg({
          context,
          _id: parent.CreditPartyId,
        });
  },

  getParentOrg: async (parent, args, context) => {
    if (!parent?.ParentOrgId) return undefined;
    return getOrg({
      context,
      _id: parent.ParentOrgId,
    });
  },

  listChildOrg: async (parent, args, context) => {
    const _id = parent?._id;
    if (!_id) return undefined;
    return listChildOrg({
      context,
      _id,
    });
  },
};
