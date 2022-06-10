/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../../../../../common/ui/components/SEO';

import { iso } from '../../../../../common/helpers/dates';

class ContohFormUncontrolled extends React.Component {
  handleSubmit = (form) => {
    const { updateContoh, doc } = this.props;
    updateContoh({
      variables: {
        inputContoh: {
          _id: doc._id,
          nr: form.nr.value,
          name: form.name.value,
          contohDate: form.contohDate.value,
          amount: parseFloat(form.amount.value),
          type: form.type.value,
          description: form.description.value,
        },
      },
    });
  };

  handleRemove = () => {
    const { removeContoh, doc } = this.props;
    if (confirm(`Contoh will permanently DELETED!!! ARE YOU SURE???`)) {
      removeContoh({
        variables: {
          _id: doc._id,
        },
      });
    }
  };

  handleStatus = (status) => {
    const { setStatusToDraft, setStatusToActive, setStatusToClosed, doc } = this.props;

    const actions = {
      Draft: setStatusToDraft,
      Active: setStatusToActive,
      Closed: setStatusToClosed,
    };

    if (confirm(`Contoh will be set to ${status}?`)) {
      actions[status]({
        variables: {
          _id: doc._id,
        },
      });
    }
  };

  render() {
    const { doc, types, settings, match, disabled } = this.props;

    return (
      <form
        className="space-y-8 divide-y divide-gray-200"
        ref={(form) => (this.form = form)}
        onSubmit={(event) => {
          event.preventDefault();
          this.handleSubmit(this.form);
        }}
      >
        <SEO
          title={`${settings.name} | Contoh | ${doc.name || doc._id}`}
          description={doc.description}
          path={match.path}
          image={settings.iconUrl}
          twitter={settings.twitter}
        />

        <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="divide-y divide-gray-200 pt-8 space-y-6 sm:pt-10 sm:space-y-5">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">{doc.name}</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                [ {doc.type} ] [ {doc.status} ]
              </p>
            </div>
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
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
                    disabled={disabled}
                    required
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

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
                    disabled={disabled}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="contohDate"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Contoh Date
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="contohDate"
                    name="contohDate"
                    type="datetime-local"
                    defaultValue={iso(doc.contohDate, settings.timezone, 'YYYY-MM-DD[T]HH:mm')}
                    disabled={disabled}
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Amount
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="amount"
                    name="amount"
                    type="number"
                    defaultValue={doc.amount}
                    disabled={disabled}
                    required
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Type
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
                    disabled={disabled}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  />
                  <p className="mt-2 text-sm text-gray-500">
                    Write a few sentences about this contoh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            {doc.status === 'Draft' && (
              <>
                <button
                  type="button"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={this.handleRemove}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => this.handleStatus('Active')}
                >
                  Set to Active
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </>
            )}
            {doc.status === 'Active' && (
              <>
                <button
                  type="button"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => this.handleStatus('Draft')}
                >
                  Set to Draft
                </button>
                <button
                  type="button"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => this.handleStatus('Closed')}
                >
                  Set to Closed
                </button>
              </>
            )}
            {doc.status === 'Closed' && (
              <button
                type="button"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => this.handleStatus('Active')}
              >
                Set to Active
              </button>
            )}
          </div>
        </div>
      </form>
    );
  }
}

ContohFormUncontrolled.defaultProps = {
  disabled: true,
  types: ['Manual', 'Cron'],
};

ContohFormUncontrolled.propTypes = {
  doc: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  types: PropTypes.arrayOf(PropTypes.string),
  updateContoh: PropTypes.func.isRequired,
  removeContoh: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default ContohFormUncontrolled;
