/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormikInput from '../../../../../common/ui/components/Formik/Input';
import FormikTextarea from '../../../../../common/ui/components/Formik/Textarea';
import FormikSelect from '../../../../../common/ui/components/Formik/Select';

import { iso } from '../../../../../common/helpers/dates';
import classNames from '../../../../../common/helpers/classNames';
import setDocStateAfterUpdate from '../../../../../common/helpers/setDocStateAfterUpdate';

class ContohForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: props.doc,
    };
  }

  handleSubmit = (values) => {
    const { updateContoh } = this.props;
    const { doc } = this.state;

    alert(JSON.stringify(values, null, 2));

    const inputContoh = {
      _id: doc._id,
      ...values,
    };
    delete inputContoh.status;

    updateContoh({
      variables: {
        inputContoh,
      },
    }).then((response) => setDocStateAfterUpdate('updateContoh', doc, response, this));
  };

  handleRemove = () => {
    const { removeContoh } = this.props;
    const { doc } = this.state;

    if (confirm(`Contoh will permanently DELETED!!! ARE YOU SURE???`)) {
      removeContoh({
        variables: {
          _id: doc._id,
        },
      });
    }
  };

  handleStatus = (status, values) => {
    const { setStatusToDraft, setStatusToActive, setStatusToClosed } = this.props;
    const { doc } = this.state;

    if (status === 'Active' && values) this.handleSubmit(values);

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
    const { types, settings, disabled } = this.props;
    const { doc } = this.state;

    return (
      <Formik
        initialValues={{
          name: doc.name || '',
          nr: doc.nr || '',
          amount: doc.amount || '',
          contohDate: iso(doc.contohDate, settings.timezone, 'YYYY-MM-DD[T]HH:mm'),
          type: doc.type,
          status: doc.status,
          description: doc.description || '',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Tidak boleh kosong'),
          nr: Yup.string().required('Tidak boleh kosong'),
          contohDate: Yup.string().required('Tidak boleh kosong'),
          amount: Yup.number()
            .typeError('Harap mengisi angka saja')
            .positive('Harap mengisi angka positif')
            .min(1)
            // .integer("Harap mengisi angka tidak ada koma")
            .required('Tidak boleh kosong'),
          type: Yup.string().required('Tidak boleh kosong').oneOf(types, 'Tipe Invalid'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            this.handleSubmit(values);
            setSubmitting(false);
          }, 300);
        }}
      >
        {(formik) => (
          <Form>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <FormikInput
                  label="Nomor Dokumen"
                  name="nr"
                  type="text"
                  placeholder="Harap mengisi nomor dokumen"
                  disabled={disabled}
                />
              </div>

              <div className="sm:col-span-3">
                <FormikInput
                  label="Nama Dokumen"
                  name="name"
                  type="text"
                  placeholder="Harap mengisi nama dokumen"
                  disabled={disabled}
                />
              </div>

              <div className="sm:col-span-3">
                <FormikInput
                  label="Tanggal Dokumen"
                  name="contohDate"
                  type="datetime-local"
                  placeholder="Harap mengisi tanggal dokumen"
                  disabled={disabled}
                />
              </div>

              <div className="sm:col-span-3">
                <FormikInput
                  label="Jumlah"
                  name="amount"
                  type="number"
                  placeholder="Harap mengisi jumlah"
                  disabled={disabled}
                />
              </div>

              <div className="sm:col-span-3">
                <FormikSelect label="Tipe Dokumen" name="type" disabled={disabled}>
                  <option value="">Harap memilih tipe dokumen</option>
                  {types.map((tipe) => (
                    <option key={tipe}>{tipe}</option>
                  ))}
                </FormikSelect>
              </div>

              <div className="sm:col-span-3">
                <FormikInput label="Status" name="status" type="text" disabled />
              </div>

              <div className="sm:col-span-6">
                <FormikTextarea
                  label="Description"
                  name="description"
                  placeholder="Please write something"
                  disabled={disabled}
                />
              </div>
            </div>

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
                  {doc.contohDate && doc.nr && doc.name && doc.amount && (
                    <button
                      type="button"
                      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => this.handleStatus('Active', formik.values)}
                    >
                      Set to Active
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className={classNames(
                      formik.isSubmitting
                        ? 'bg-gray-400 text-gray-700 border-gray-300 hover:bg-gray-500'
                        : 'bg-indigo-600 text-white border-transparent hover:bg-indigo-700',
                      'ml-3 inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                    )}
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
          </Form>
        )}
      </Formik>
    );
  }
}

ContohForm.defaultProps = {
  disabled: true,
  types: ['Manual', 'Cron'],
};

ContohForm.propTypes = {
  doc: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  types: PropTypes.arrayOf(PropTypes.string),
  updateContoh: PropTypes.func.isRequired,
  removeContoh: PropTypes.func.isRequired,
  setStatusToDraft: PropTypes.func.isRequired,
  setStatusToActive: PropTypes.func.isRequired,
  setStatusToClosed: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
};

export default ContohForm;
