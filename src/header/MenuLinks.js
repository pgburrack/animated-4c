import React, { Fragment } from 'react';
import MenuLink from './MenuLink';

const MenuLinks = () => (
  <Fragment>
    <MenuLink to="/projects">Projects</MenuLink>
    <MenuLink to="/about">About</MenuLink>
    <MenuLink to="/blog">Email</MenuLink>
  </Fragment>
);

export default MenuLinks;
