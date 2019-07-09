import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import { CompanyName, ProjectName } from '../../../config';

const propTypes = {
  children: PropTypes.node, // eslint-disable-line
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span>&copy; {Moment().year()} {CompanyName}</span>
        <span className="ml-auto">{ProjectName}</span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
