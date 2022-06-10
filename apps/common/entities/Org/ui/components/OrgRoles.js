/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import _, { flowRight as compose } from 'lodash';

import Loading from '../../../../ui/components/Loading';
import BlankState from '../../../../ui/components/BlankState';

import { detailOrg } from '../utils/queries.gql';

import { updateOrgRoles as updateOrgRolesMutation } from '../utils/mutations.gql';

// FIXME simplify please
// FIXME still show all Roles in all Tenant
class OrgRoles extends React.Component {
  handleSubmit = () => {
    const { data, updateOrgRoles } = this.props;
    const roleCheckboxes = document.querySelectorAll('[name="checkboxitem"]:checked');
    const roles = [];
    [].forEach.call(roleCheckboxes, (role) => {
      roles.push(role.value);
    });

    const party = {
      _id: data.detailOrg._id,
      roles,
    };

    updateOrgRoles({ variables: { party } });
  };

  render() {
    const { data, disabled } = this.props;
    if (data.loading) return <Loading />;

    const roles = data.detailOrg && data.detailOrg.roles;
    if (!roles)
      return <BlankState title="No Roles found" subtitle="Make sure you have enough right" />;

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

OrgRoles.defaultProps = {
  disabled: true,
};

OrgRoles.propTypes = {
  data: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  updateOrgRoles: PropTypes.func.isRequired,
};

export default compose(
  graphql(detailOrg, {
    options: ({ match }) => ({
      fetchPolicy: 'no-cache',
      variables: {
        _id: match.params._id,
      },
    }),
  }),
  graphql(updateOrgRolesMutation, {
    name: 'updateOrgRoles',
    options: () => ({
      onCompleted: () => {
        alert('Roles updated!');
      },
      onError: (error) => {
        alert(error.message);
      },
    }),
  }),
)(OrgRoles);
