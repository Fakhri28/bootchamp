/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import _, { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';

import { detailUser } from '../utils/queries.gql';

import { updateUserRoles as updateUserRolesMutation } from '../utils/mutations.gql';

class UserRoles extends React.Component {
  handleSubmit = () => {
    const { data, updateUserRoles } = this.props;
    const roleCheckboxes = document.querySelectorAll('[name="checkboxitem"]:checked');
    const roles = [];
    [].forEach.call(roleCheckboxes, (role) => {
      roles.push(role.value);
    });

    const party = {
      _id: data.detailUser._id,
      roles,
    };

    updateUserRoles({ variables: { party } });
  };

  render() {
    const { data, disabled } = this.props;
    if (data.loading) return <Loading />;

    const roles = data.detailUser && data.detailUser.roles;
    if (!roles)
      return <BlankState title="No Roles found" subtitle="Make sure you have enough user right" />;

    const orgs = _.groupBy(roles, 'name');

    return (
      <form
        className="space-y-8 divide-y divide-gray-200"
        ref={(form) => (this.form = form)}
        onSubmit={(event) => {
          event.preventDefault();
          this.handleSubmit(this.form);
        }}
      >
        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Roles</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Roles define your right to see menus and pages
              </p>
            </div>
            <div className="space-y-6 sm:space-y-5 divide-y divide-gray-200">
              {Object.keys(orgs).map((org) => (
                <div key={org} className="pt-6 sm:pt-5">
                  <div role="group" aria-labelledby="label-email">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                      <div>
                        <div
                          className="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
                          id="label-email"
                        >
                          {org}
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg space-y-4">
                          {orgs[org].map((item) => (
                            <div
                              key={`${item.name}_${item.value}`}
                              className="relative flex items-start"
                            >
                              <div className="flex items-center h-5">
                                <input
                                  id={`${item.name}_${item.value}`}
                                  name="checkboxitem"
                                  type="checkbox"
                                  defaultChecked={item.defaultChecked}
                                  value={JSON.stringify({ name: item.name, value: item.value })}
                                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  disabled={disabled}
                                />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor="comments" className="font-medium text-gray-700">
                                  {item.value}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {!disabled && (
          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </form>
    );
  }
}

UserRoles.defaultProps = {
  disabled: true,
};

UserRoles.propTypes = {
  data: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  updateUserRoles: PropTypes.func.isRequired,
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
  graphql(updateUserRolesMutation, {
    name: 'updateUserRoles',
    options: () => ({
      refetchQueries: [{ query: detailUser }],
      onCompleted: () => {
        alert('Roles updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(UserRoles);
