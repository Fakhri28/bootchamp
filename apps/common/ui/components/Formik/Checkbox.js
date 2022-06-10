/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import classNames from '../../../helpers/classNames';

const FormikCheckbox = ({ label, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`

  const [field, meta] = useField({ ...props, type: 'checkbox' });
  const { disabled } = props;

  return (
    <>
      <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          type="checkbox"
          className={classNames(
            disabled ? 'bg-gray-100' : '',
            'focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
          )}
          {...field}
          {...props}
        />
        {meta.touched && meta.error && (
          <div className="mt-2 text-sm text-red-500">{meta.error}</div>
        )}
      </div>
      <br />
    </>
  );

  // return (
  //   <div className="relative flex items-start">
  //     <div className="flex items-center h-5">
  //       <input
  //         type="checkbox"
  //         className={classNames(
  //           disabled ? 'bg-gray-100' : '',
  //           'focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded',
  //         )}
  //         {...field}
  //         {...props}
  //       />
  //     </div>
  //     <div className="ml-3 text-sm">
  //       <label htmlFor={props.id || props.name} className="font-medium text-gray-700">
  //         {children}
  //       </label>
  //       {meta.touched && meta.error && <div className=" text-red-500">{meta.error}</div>}
  //     </div>
  //     <br />
  //   </div>
};

FormikCheckbox.defaultProps = {
  label: '',
  id: undefined,
  disabled: true,
};

FormikCheckbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  // children: PropTypes.node.isRequired,
};

export default FormikCheckbox;
