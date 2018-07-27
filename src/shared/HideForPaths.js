import React, { Fragment } from 'react';
import { withRouter, matchPath } from 'react-static';
import PropTypes from 'prop-types';

const HideforPaths = ({ children, location, paths, whitelist }) => {
  const path = paths.find(path =>
    matchPath(location.pathname, { path, exact: true })
  );

  return (whitelist && path) || (!whitelist && !path) ? (
    <Fragment>{children}</Fragment>
  ) : null;
};

HideforPaths.defaultProps = {
  whitelist: true
};

HideforPaths.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  paths: PropTypes.arrayOf(PropTypes.string).isRequired,
  whitelist: PropTypes.bool
};

export default withRouter(HideforPaths);
