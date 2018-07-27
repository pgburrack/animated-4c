import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import MenuLink from './MenuLink';
import HideForPaths from '../shared/HideForPaths';

const Anchor = MenuLink.withComponent('a');

const MenuLinks = ({ theme, mb }) => (
  <Fragment>
    <HideForPaths paths={['/archives', '/archives/:id']} whitelist={false}>
      <MenuLink mb={mb} fontSize={theme.menuFontSizes} to="/projects">
        Projects
      </MenuLink>
    </HideForPaths>
    <MenuLink mb={mb} fontSize={theme.menuFontSizes} to="/about">
      About
    </MenuLink>
    <Anchor
      href="mailto:zhanonly@gmail.com"
      target="_top"
      fontSize={theme.menuFontSizes}>
      Email
    </Anchor>
  </Fragment>
);

MenuLinks.defaultProps = {
  mb: null
};

MenuLinks.propTypes = {
  theme: PropTypes.object.isRequired,
  mb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};
export default withTheme(MenuLinks);
