import detailTenant from './detail';

export default {
  detailTenant: async (parent, args, context) =>
    detailTenant({
      context,
      _id: (parent && parent.TenantId) || args._id,
      publishName: 'detailTenant',
    }),
  getTenant: async (parent, args, context) =>
    detailTenant({
      context,
      _id: (parent && parent.TenantId) || args._id,
      publishName: 'getTenant',
    }),
};
