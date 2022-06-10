/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { useField, useFormikContext } from 'formik';
import classNames from '../../../helpers/classNames';

const FormikTextarea = ({ label, funcSetFieldValue, depsSetFieldValue, ...props }) => {
  const [field, meta] = useField(props);
  const { disabled } = props;

  if (funcSetFieldValue && depsSetFieldValue) {
    const { values, touched, setFieldValue } = useFormikContext();

    React.useEffect(() => {
      setFieldValue(props.name, funcSetFieldValue(values));
    }, [...depsSetFieldValue(values, touched), setFieldValue, props.name]);
  }

  return (
    <>
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <textarea
          className={classNames(
            disabled ? 'bg-gray-100' : '',
            'shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md',
          )}
          rows={3}
          {...field}
          {...props}
        />
        {meta.touched && meta.error && <p className="mt-2 text-sm text-red-500">{meta.error}</p>}
      </div>
      <br />
    </>
  );
};

FormikTextarea.defaultProps = {
  label: '',
  id: undefined,
  disabled: true,
  funcSetFieldValue: undefined,
  depsSetFieldValue: undefined,
};

FormikTextarea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  funcSetFieldValue: PropTypes.func,
  depsSetFieldValue: PropTypes.func,
};

export default FormikTextarea;
