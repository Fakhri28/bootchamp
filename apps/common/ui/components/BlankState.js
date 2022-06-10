import React from 'react';
import PropTypes from 'prop-types';

const BlankState = (props) => {
  const { title, subtitle } = props;

  return (
    <div>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  );
};

BlankState.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default BlankState;
