import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-static';
import styled from 'styled-components';
import { display } from 'styled-system';
import { Row, Column } from '../grid';

import Logo from '../header/Logo';
import MenuLinks from '../header/MenuLinks';
import Hamburger from '../header/hamburger';

const FlexHeader = styled(Row)`
  height: 80px;
  font-family: Open Sans, sans-serif;
`;

const Nav = styled(Column)`
  ${display};
`;

const MobileNav = styled(Nav)``;

const Header = () => (
  <FlexHeader
    is="header"
    height="80px"
    alignItems="center"
    justifyContent="space-between">
    <Column>
      <Link exact to="/">
        <Logo />
      </Link>
    </Column>
    <Nav is="nav" display={['none', 'none', 'flex', 'flex']}>
      <MenuLinks />
    </Nav>
    <MobileNav display={['flex', 'flex', 'none', 'none']}>
      <Hamburger />
    </MobileNav>
  </FlexHeader>
);

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
