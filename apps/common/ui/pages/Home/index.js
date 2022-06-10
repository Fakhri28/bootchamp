/* eslint-disable react/jsx-props-no-spreading */

// import { Meteor } from 'meteor/meteor';

import React from 'react';

import HomePublic from './Public';

// toogle this if you want auto switch to logged in home
// import Dashboard from './Dashboard';

// const HomePage = () => (Meteor.isClient && Meteor.userId() ? <Dashboard /> : <HomePublic />);

// toogle this if you want auto switch to logged in home
const CommonHomePage = (props) => <HomePublic {...props} />;

export default CommonHomePage;
