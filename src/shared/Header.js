import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-static";
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4.8rem;
  width: 100%;
  background-color: #fcfcfc;
  height: 80px;
  
  a {
    color: #071d2c;
    padding: 1rem;
    display: inline-block;
  }
`

const Logo = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 2px;
  text-align: center;
`

const Section = styled.section``

const HeaderLink = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 2px;
  color: #7f7f7f;
`

const Header = (props) => {
  return (
    <Nav>
      <Section>
        <Link exact to="/">
          <Logo>YIHAN ZHOU</Logo>
        </Link>
      </Section>
      <Section>
        <HeaderLink to="/about">About</HeaderLink>
        <HeaderLink to="/blog">Email</HeaderLink>
      </Section>
    </Nav>
  );
};

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
