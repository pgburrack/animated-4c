import React, { Fragment } from 'react';
import { withTheme } from 'styled-components';
import MenuLink from './MenuLink';

const MenuLinks = ({ theme }) => (
  <Fragment>
    <MenuLink fontSize={theme.menuFontSizes} to="/projects">
      Projects
    </MenuLink>
    <MenuLink fontSize={theme.menuFontSizes} to="/about">
      About
    </MenuLink>
    <MenuLink fontSize={theme.menuFontSizes} to="/blog">
      Email
    </MenuLink>
  </Fragment>
);

export default withTheme(MenuLinks);
