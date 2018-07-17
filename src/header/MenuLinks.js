import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import MenuLink from './MenuLink';

const Anchor = MenuLink.withComponent('a');

const MenuLinks = ({ theme, mb, onClick }) => (
  <Fragment>
    <MenuLink mb={mb} fontSize={theme.menuFontSizes} to="/projects">
      Projects
    </MenuLink>
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
  mb: null,
  onClick: () => {}
};

MenuLinks.propTypes = {
  theme: PropTypes.object.isRequired,
  mb: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  onClick: PropTypes.func
};
export default withTheme(MenuLinks);
