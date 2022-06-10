import React from 'react';
import PropTypes from 'prop-types';

import validate from '../../helpers/validate';

// FIXME please migrate this function to react lib Formix

class Validation extends React.Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
  }

  componentDidMount() {
    const { children, ...rest } = this.props;
    validate(this.form, { ...rest });
  }

  render() {
    const { children } = this.props;

    if (!React.Children.only(children) || children.type !== 'form') {
      console.warn(
        '[ Validation ] A single <form> element is the only allowed child of the Validation component.',
      );
      return null;
    }

    return <>{React.cloneElement(children, { ref: (form) => (this.form = form) })}</>;
  }
}

Validation.propTypes = {
  children: PropTypes.node.isRequired,
  rules: PropTypes.object.isRequired,
  messages: PropTypes.object.isRequired,
};

export default Validation;
