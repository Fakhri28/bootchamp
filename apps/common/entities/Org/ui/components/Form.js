/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';

// import Anon from '../../../../ui/components/Anon';

// FIXME use formik please
class OrgForm extends React.Component {
  handleSubmit = (form) => {
    const { updateDoc, doc } = this.props;
    const inputOrg = {
      _id: doc._id,
      nr: form.nr.value,
      name: form.name.value,
      shortname: form.shortname.value,
      email: form.email.value,
      address: {
        phone: form.phone.value,
        address: form.address.value,
        // zipCode: form.zipCode.value,
        // province: form.province.value,
        // regency: form.regency.value,
        // district: form.district.value,
        // village: form.village.value,
        country: form.country.value,
      },
      type: form.type.value,
      description: form.description.value,
    };

    updateDoc({
      variables: {
        inputOrg,
      },
    });
  };

  handleRemove = () => {
    // eslint-disable-next-line react/destructuring-assignment
    const { doc, removeDoc } = this.props;
    if (confirm(`Organization will permanently DELETED!!! ARE YOU SURE???`)) {
      removeDoc({
        variables: {
          _id: doc._id,
        },
      });
    }
  };

  handleStatus = (status) => {
    const { setStatusToActive, doc } = this.props;

    const actions = {
      // Draft: setStatusToDraft,
      Active: setStatusToActive,
      // Closed: setStatusToClosed,
    };

    if (status === 'Active') this.handleSubmit(this.form);

    if (confirm(`Organization will be set to ${status}?`)) {
      actions[status]({
        variables: {
          _id: doc._id,
        },
      });
    }
  };

  render() {
    const { countries, doc, disabled, settings } = this.props;
    const types = doc.ParentOrgId ? ['Branch', 'Department', 'Division'] : ['Company'];

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
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Organization Information
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              {/*  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5"> */}
              {/*    <label htmlFor="photo" className="block text-sm font-medium text-gray-700"> */}
              {/*      Profile Photo */}
              {/*    </label> */}
              {/*    <div className="mt-1 sm:mt-0 sm:col-span-2"> */}
              {/*      <div className="flex items-center"> */}
              {/*        <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100"> */}
              {/*          <Anon /> */}
              {/*        </span> */}
              {/*        <button */}
              {/*          type="button" */}
              {/*          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" */}
              {/*        > */}
              {/*          Change */}
              {/*        </button> */}
              {/*      </div> */}
              {/*    </div> */}
              {/*  </div> */}

              {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"> */}
              {/*  <label */}
              {/*    htmlFor="cover_photo" */}
              {/*    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" */}
              {/*  > */}
              {/*    Cover photo */}
              {/*  </label> */}
              {/*  <div className="mt-1 sm:mt-0 sm:col-span-2"> */}
              {/*    <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"> */}
              {/*      <div className="space-y-1 text-center"> */}
              {/*        <svg */}
              {/*          className="mx-auto h-12 w-12 text-gray-400" */}
              {/*          stroke="currentColor" */}
              {/*          fill="none" */}
              {/*          viewBox="0 0 48 48" */}
              {/*          aria-hidden="true" */}
              {/*        > */}
              {/*          <path */}
              {/*            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" */}
              {/*            strokeWidth={2} */}
              {/*            strokeLinecap="round" */}
              {/*            strokeLinejoin="round" */}
              {/*          /> */}
              {/*        </svg> */}
              {/*        <div className="flex text-sm text-gray-600"> */}
              {/*          <label */}
              {/*            htmlFor="file-upload" */}
              {/*            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500" */}
              {/*          > */}
              {/*            <span>Upload a file</span> */}
              {/*            <input */}
              {/*              id="file-upload" */}
              {/*              name="file-upload" */}
              {/*              type="file" */}
              {/*              className="sr-only" */}
              {/*            /> */}
              {/*          </label> */}
              {/*          <p className="pl-1">or drag and drop</p> */}
              {/*        </div> */}
              {/*        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p> */}
              {/*      </div> */}
              {/*    </div> */}
              {/*  </div> */}
              {/* </div> */}

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="nr"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Nr
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="nr"
                    name="nr"
                    type="text"
                    autoComplete="nr"
                    defaultValue={doc.nr}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    disabled={disabled}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    defaultValue={doc.name}
                    required
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    disabled={disabled}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="shortname"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Short Name
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="shortname"
                    name="shortname"
                    type="text"
                    autoComplete="shortname"
                    defaultValue={doc.shortname}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    disabled={disabled}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Email address
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    defaultValue={doc.email}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    disabled={disabled}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Phone
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="phone"
                    defaultValue={doc.address && doc.address.phone}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    disabled={disabled}
                  />
                </div>
              </div>
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Address
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="address"
                    name="address"
                    rows={5}
                    defaultValue={doc.address && doc.address.address}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    disabled={disabled}
                  />
                </div>
              </div>

              {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"> */}
              {/*  <label */}
              {/*    htmlFor="zipCode" */}
              {/*    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" */}
              {/*  > */}
              {/*    Zip Code */}
              {/*  </label> */}
              {/*  <div className="mt-1 sm:mt-0 sm:col-span-2"> */}
              {/*    <input */}
              {/*      id="zipCode" */}
              {/*      name="zipCode" */}
              {/*      type="text" */}
              {/*      autoComplete="zipCode" */}
              {/*      defaultValue={doc.address && doc.address.zipCode} */}
              {/*      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" */}
              {/*    /> */}
              {/*  </div> */}
              {/* </div> */}

              {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"> */}
              {/*  <label */}
              {/*    htmlFor="province" */}
              {/*    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" */}
              {/*  > */}
              {/*    State/Province */}
              {/*  </label> */}
              {/*  <div className="mt-1 sm:mt-0 sm:col-span-2"> */}
              {/*    <select */}
              {/*      id="province" */}
              {/*      name="province" */}
              {/*      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" */}
              {/*      defaultValue={doc.address && doc.address.province} */}
              {/*    > */}
              {/*      {provinces.map((opt) => ( */}
              {/*        <option key={opt}>{opt}</option> */}
              {/*      ))} */}
              {/*    </select> */}
              {/*  </div> */}
              {/* </div> */}

              {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"> */}
              {/*  <label */}
              {/*    htmlFor="district" */}
              {/*    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" */}
              {/*  > */}
              {/*    Regency */}
              {/*  </label> */}
              {/*  <div className="mt-1 sm:mt-0 sm:col-span-2"> */}
              {/*    <select */}
              {/*      id="regency" */}
              {/*      name="regency" */}
              {/*      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" */}
              {/*      defaultValue={doc.address && doc.address.regency} */}
              {/*    > */}
              {/*      {regencies.map((opt) => ( */}
              {/*        <option key={opt}>{opt}</option> */}
              {/*      ))} */}
              {/*    </select> */}
              {/*  </div> */}
              {/* </div> */}

              {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"> */}
              {/*  <label */}
              {/*    htmlFor="district" */}
              {/*    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" */}
              {/*  > */}
              {/*    District */}
              {/*  </label> */}
              {/*  <div className="mt-1 sm:mt-0 sm:col-span-2"> */}
              {/*    <select */}
              {/*      id="district" */}
              {/*      name="district" */}
              {/*      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" */}
              {/*      defaultValue={doc.address && doc.address.district} */}
              {/*    > */}
              {/*      {districts.map((opt) => ( */}
              {/*        <option key={opt}>{opt}</option> */}
              {/*      ))} */}
              {/*    </select> */}
              {/*  </div> */}
              {/* </div> */}

              {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"> */}
              {/*  <label */}
              {/*    htmlFor="village" */}
              {/*    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2" */}
              {/*  > */}
              {/*    Village */}
              {/*  </label> */}
              {/*  <div className="mt-1 sm:mt-0 sm:col-span-2"> */}
              {/*    <select */}
              {/*      id="village" */}
              {/*      name="village" */}
              {/*      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md" */}
              {/*      defaultValue={doc.address && doc.address.village} */}
              {/*    > */}
              {/*      {villages.map((opt) => ( */}
              {/*        <option key={opt}>{opt}</option> */}
              {/*      ))} */}
              {/*    </select> */}
              {/*  </div> */}
              {/* </div> */}

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Country
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <select
                    id="country"
                    name="country"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    defaultValue={doc.country}
                    disabled={disabled}
                  >
                    {countries.map((tipe) => (
                      <option key={tipe}>{tipe}</option>
                    ))}
                  </select>
                </div>
              </div>

              {settings.bcava && (
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="bcaCustomerNumber"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    BCA Customer Number
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input
                      id="bcaCustomerNumber"
                      name="bcaCustomerNumber"
                      type="text"
                      defaultValue={doc.bcaCustomerNumber}
                      className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                      disabled
                    />
                  </div>
                </div>
              )}

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Tipe
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <select
                    id="type"
                    name="type"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    defaultValue={doc.type}
                    disabled={disabled}
                  >
                    {types.map((tipe) => (
                      <option key={tipe}>{tipe}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Description
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    defaultValue={doc.description}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                    disabled={disabled}
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Write a few sentences about the Organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            {doc.status === 'Draft' && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={this.handleRemove}
              >
                Delete
              </button>
            )}
            {/* {doc.status === 'Active' && ( */}
            {/*  <button */}
            {/*    type="button" */}
            {/*    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" */}
            {/*    onClick={() => this.handleStatus('Draft')} */}
            {/*  > */}
            {/*    Set to Draft */}
            {/*  </button> */}
            {/* )} */}
            {(doc.status === 'Draft' || doc.status === 'Closed') && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.handleStatus('Active')}
              >
                Set to Active
              </button>
            )}
            {/* {doc.status === 'Active' && ( */}
            {/*  <button */}
            {/*    type="button" */}
            {/*    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" */}
            {/*    onClick={() => this.handleStatus('Closed')} */}
            {/*  > */}
            {/*    Set to Closed */}
            {/*  </button> */}
            {/* )} */}
            {doc.status === 'Draft' && (
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            )}
          </div>
        </div>
      </form>
    );
  }
}

OrgForm.defaultProps = {
  disabled: true,
  // types: ['Company', 'Branch', 'Department', 'Division'],
  countries: ['Indonesia'],
};
OrgForm.propTypes = {
  doc: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  // types: PropTypes.arrayOf(PropTypes.string),
  // provinces: PropTypes.arrayOf(PropTypes.string),
  // regencies: PropTypes.arrayOf(PropTypes.string),
  // districts: PropTypes.arrayOf(PropTypes.string),
  // villages: PropTypes.arrayOf(PropTypes.string),
  countries: PropTypes.arrayOf(PropTypes.string),
  updateDoc: PropTypes.func.isRequired,
  removeDoc: PropTypes.func.isRequired,
  // setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  // setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default OrgForm;
