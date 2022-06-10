import addTenant from './add';
import updateTenant from './update';
import removeTenant from './remove';

import setTenantStatusToDraft from './setStatusToDraft';
import setTenantStatusToActive from './setStatusToActive';
import setTenantStatusToClosed from './setStatusToClosed';

export default {
  addTenant: async (root, args, context) =>
    addTenant({
      context,
      args,
    }),
  updateTenant: async (root, args, context) =>
    updateTenant({
      context,
      args: args.inputTenant,
    }),
  removeTenant: async (root, args, context) =>
    removeTenant({
      context,
      args,
    }),

  setTenantStatusToDraft: async (root, args, context) =>
    setTenantStatusToDraft({
      context,
      args,
    }),
  setTenantStatusToActive: async (root, args, context) =>
    setTenantStatusToActive({
      context,
      args,
    }),
  setTenantStatusToClosed: async (root, args, context) =>
    setTenantStatusToClosed({
      context,
      args,
    }),
};
