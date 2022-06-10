/* eslint-disable jsx-a11y/label-has-associated-control, camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind/src/autoBind';

import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';

import uploadToS3 from '../../../../helpers/uploadToS3';

import { detailUser } from '../utils/queries.gql';

class UserIdCard extends React.Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      idcard: null,
      progress_Image_User_IDCard: '',
    };
  }

  handleUploadIDCard(event) {
    const { data, history, routeAfter } = this.props;
    this.setState({
      idcard: URL.createObjectURL(event.target.files[0]),
    });
    uploadToS3(
      event,
      'User',
      data.detailUser._id,
      'Image_User_IDCard',
      undefined,
      history,
      routeAfter,
      this,
    );
  }

  render() {
    const { data } = this.props;
    const { idcard, progress_Image_User_IDCard } = this.state;

    if (data.loading) return <Loading />;
    if (!data.detailUser)
      return (
        <BlankState title="No Profile found" subtitle="Make sure you have enough user right" />
      );

    return (
      <form
        className="space-y-8 divide-y divide-gray-200"
        ref={(form) => (this.form = form)}
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Personal Identification Card
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Authorized Identification Card</p>
            </div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="idcard_image"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  ID Card
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      {/* eslint-disable-next-line no-nested-ternary */}
                      {idcard ? (
                        <img src={idcard} alt="" />
                      ) : data.detailUser.Image_User_IDCard ? (
                        <a
                          href={data.detailUser.Image_User_IDCard}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img src={data.detailUser.Image_User_IDCard} alt="" />
                        </a>
                      ) : (
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}

                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="idcard-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload ID Card</span>
                          <input
                            id="idcard-upload"
                            name="idcard-upload"
                            type="file"
                            className="sr-only"
                            onChange={this.handleUploadIDCard}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>

                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 1 MB</p>
                      <p className="text-xs text-gray-500">{progress_Image_User_IDCard}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

UserIdCard.defaultProps = {
  routeAfter: undefined,
};

UserIdCard.propTypes = {
  data: PropTypes.object.isRequired,
  routeAfter: PropTypes.string,
  history: PropTypes.object.isRequired,
};

export default compose(
  graphql(detailUser, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
)(UserIdCard);
