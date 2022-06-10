import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render';

import 'isomorphic-fetch';

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import checkURLforSSR from '../apps/common/helpers/server/checkURLforSSR';
import parseHost from '../apps/common/helpers/parseHost';

import Tenant from '../apps/common/entities/Tenant/api';

import DefaultApp from '../apps/default/ui';
import CommonApp from '../apps/common/ui';
import ExampleApp from '../apps/example/ui';
import FrontendApp from '../apps/frontend/ui';
import JchaApp from '../apps/jcha/ui';
import SofiApp from '../apps/sofi/ui';
import BootchampApp from '../apps/bootchamp/ui';

const Apps = {
  default: DefaultApp,
  'common.maya': CommonApp,
  'example.maya': ExampleApp,
  'frontend.lelang.maya': FrontendApp,
  'jcha.maya': JchaApp,
  'sofi.maya': SofiApp,
  'bootchamp.maya': BootchampApp,
};

onPageLoad(async (sink) => {
  const host = parseHost(sink.request.headers.host);

  const tenant = Tenant.findOne({ host });
  if (!tenant) throw new Error('Tenant not found in sink');

  sink.appendToHead(`<title>${tenant.settings.name}</title>`);
  sink.appendToHead(`<meta name="description" content="${tenant.settings.description}">`);

  // FIXME add here pre-compiled prod css if needed
  // sink.appendToHead(
  //   `<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css" integrity="sha384-+d0P83n9kaQMCwj8F4RJB66tzIwOKmrdb46+porD/OvrJ+37WqIM7UoBtwHO6Nlg" crossorigin="anonymous">`,
  // );
  sink.appendToHead(`<link rel="shortcut icon" href="${tenant.settings.iconUrl || '/mkcb.ico'}">`);
  sink.appendToHead(
    `<link rel="apple-touch-icon" sizes="120x120" href="${
      tenant.settings.logo || '/mkcb_logo.png'
    }/">`,
  );
  // sink.appendToHead(`<link rel="manifest" href="/manifest.json">`);

  if (!checkURLforSSR(sink.request.url.path)) {
    sink.appendToBody(`
      <script>
        window.noSSR = true;
      </script>
    `);
    return;
  }

  // FIXME for ssr to, always use authenticated instead of Meteor.userId() in frontend
  const App = Apps[host] || Apps.default;

  const apolloClient = new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: Meteor.settings.public.graphQL.httpUri,
      headers: {
        origin: sink.request.headers.host,
      },
    }),
    cache: new InMemoryCache(),
  });

  // NOTE: renderToStringWithData pre-fetches all queries in the component tree. This allows the data
  // from our GraphQL queries to be ready at render time.
  const content = await renderToStringWithData(
    <ApolloProvider client={apolloClient}>
      <StaticRouter location={sink.request.url} context={{}}>
        <App host={host} settings={tenant && tenant.settings} />
      </StaticRouter>
    </ApolloProvider>,
  );
  const initialState = apolloClient.extract();
  const helmet = Helmet.renderStatic();

  sink.appendToHead(helmet.meta.toString());
  sink.appendToHead(helmet.title.toString());
  sink.renderIntoElementById('app', content);
  sink.appendToBody(`
    <script>
      window.__APOLLO_STATE__ = ${JSON.stringify(initialState).replace(/</g, '\\u003c')}
    </script>
  `);
});
