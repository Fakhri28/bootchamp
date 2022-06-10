/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';

import { sendVerificationEmail as sendVerificationEmailMutation } from '../../../../../common/entities/User/ui/utils/mutations.gql';

import SEO from '../../../../../common/ui/components/SEO';

import WrapperDashboard from '../../../Wrapper/Dashboard';

const ExampleDashboardUser = (props) => {
  const { user, userId, emailVerified, emailAddress, sendVerificationEmail, settings, match } =
    props;

  return (
    <WrapperDashboard currentPageName="Dashboard" {...props}>
      <SEO
        title={`${settings && settings.name} | Dashboard | User`}
        path={match.path}
        image={settings.iconUrl}
        twitter={settings.twitter}
      />

      {userId && !emailVerified && (
        <div>
          <p>{`Terima kasih! Email verifikasi telah dikirimkan ke ${emailAddress}`}</p>
          <p>Silahkan membuka email anda dan click link di dalam email tersebut.</p>
          <br />
          <p>
            Bila anda tidak mendapatkan email tersebut, silahkan click
            <button
              type="button"
              className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                sendVerificationEmail();
                alert(`Email verifikasi telah dikirim ulang ke ${emailAddress}`);
              }}
            >
              di sini
            </button>{' '}
            untuk mengirim ulang email verifikasi.
          </p>
        </div>
      )}

      {userId && emailVerified && !user.profile.Image_User_IDCard && (
        <div>
          <p>Terima kasih atas verifikasi email anda!</p>
          <br />
          <p>
            Langkah berikutnya adalah upload foto e-KTP anda di{' '}
            <i>
              <strong>
                <Link to="/idcard">tautan ini</Link>
              </strong>
            </i>
          </p>
        </div>
      )}

      {userId && emailVerified && user.profile.Image_User_IDCard && (
        <div>
          <p>Terima kasih!</p>
          <br />
          <p>
            Pendaftaran anda akan diverifikasi dan bila semuanya benar, anda akan diberi akses
            sebagai anggota.
          </p>
        </div>
      )}
    </WrapperDashboard>
  );
};

ExampleDashboardUser.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  emailVerified: PropTypes.bool.isRequired,
  emailAddress: PropTypes.string.isRequired,
  sendVerificationEmail: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default graphql(sendVerificationEmailMutation, {
  name: 'sendVerificationEmail',
})(ExampleDashboardUser);
