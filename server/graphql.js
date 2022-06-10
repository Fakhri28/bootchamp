import { Meteor } from 'meteor/meteor';

import { ApolloServer } from 'apollo-server-express';
import { getUser } from 'meteor/apollo';

import schema from './api';

export default async (app) => {
  const server = new ApolloServer({
    schema,
    introspection: Meteor.isDevelopment,
    playground: Meteor.isDevelopment,
    context: async ({ req }) => ({
      user: await getUser(req.headers.authorization),
      headers: req.headers,
    }),
    uploads: false,
  });

  await server.start();

  server.applyMiddleware({
    app,
    path: '/graphql',
  });
};

// FIXME consider using cors, please see code below
// https://github.com/cheatcode/nodejs-server-boilerplate/blob/master/api/graphql/server.js
// import { ApolloServer } from "apollo-server-express";
// import schema from "./schema";
// import { isDevelopment } from "../../.app/environment";
// import loginWithToken from "../users/token";
// import { configuration as corsConfiguration } from "../../middleware/cors";
//
// export default async (app) => {
//   const server = new ApolloServer({
//     schema,
//     introspection: isDevelopment,
//     playground: isDevelopment,
//     context: async ({ req, res }) => {
//       const token = req?.cookies["app_login_token"];
//
//       const context = {
//         req,
//         res,
//         user: {},
//       };
//
//       const user = token ? await loginWithToken({ token }) : null;
//
//       if (!user?.error) {
//         context.user = user;
//       }
//
//       return context;
//     },
//   });
//
//   await server.start();
//
//   server.applyMiddleware({
//     cors: corsConfiguration,
//     app,
//     path: "/api/graphql",
//   });
// };
