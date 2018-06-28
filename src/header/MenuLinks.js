import React, { Fragment } from 'react';
import MenuLink from './MenuLink';

const fontSizes = ['14px', '14px', '14px', '14px', '20px', '20px'];

const MenuLinks = () => (
  <Fragment>
    <MenuLink fontSize={fontSizes} to="/projects">
      Projects
    </MenuLink>
    <MenuLink fontSize={fontSizes} to="/about">
      About
    </MenuLink>
    <MenuLink fontSize={fontSizes} to="/blog">
      Email
    </MenuLink>
  </Fragment>
);

export default MenuLinks;
