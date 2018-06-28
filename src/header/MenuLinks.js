import React, { Fragment } from 'react';
import MenuLink from './MenuLink';

const fontSizes = ['14px', '14px', '14px', '14px', '20px', '20px'];
const lineHeight = [1.14, 1.14, 1.14, 1.14, 1.14, 1.2];

const MenuLinks = () => (
  <Fragment>
    <MenuLink lineHeight={lineHeight} fontSize={fontSizes} to="/projects">
      Projects
    </MenuLink>
    <MenuLink lineHeight={lineHeight} fontSize={fontSizes} to="/about">
      About
    </MenuLink>
    <MenuLink lineHeight={lineHeight} fontSize={fontSizes} to="/blog">
      Email
    </MenuLink>
  </Fragment>
);

export default MenuLinks;
