import { Meteor } from 'meteor/meteor';

import React from 'react';
import { Link } from 'react-router-dom';

const NotAuthorized = () => (
  <div className="container flex flex-col justify-center space-y-2 space-x-2 mb-5">
    <p className="text-3xl text-center m-5">NOT AUTHORIZED</p>
    <p>
      <Link to={Meteor.isClient && Meteor.userId() ? '/dashboard' : '/'}>Home</Link>
    </p>
  </div>
);

export default NotAuthorized;
