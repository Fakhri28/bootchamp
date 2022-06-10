import React from 'react';
import { hydrate, render } from 'react-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';

import apolloClient from './apolloClient';

import AppImporter from './AppImporter';

Accounts.onLogout(() => apolloClient.resetStore());

Meteor.startup(() => {
  const target = document.getElementById('app');
  const app = (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Switch>
          <AppImporter />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );

  return !window.noSSR ? hydrate(app, target) : render(app, target);
});
