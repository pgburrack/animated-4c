import React, { Component } from 'react';
import { Link } from 'react-static';
import styled, { withTheme } from 'styled-components';
import { display, space } from 'styled-system';
import { Row, Column } from '../grid';

import Logo from '../header/Logo';
import MenuLinks from '../header/MenuLinks';
import Hamburger from '../header/hamburger';
import HideForPaths from './HideForPaths';

const FlexHeader = styled(Row)`
  height: 80px;
  font-family: Open Sans, sans-serif;
`;

const Nav = styled(Column)`
  ${display};
`;

const MobileNav = styled(({ isOpen, children, ...rest }) => (
  <div {...rest}>{children}</div>
))`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${props => props.theme.zIndex.menu};
  height: 100%;
  width: 100%;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: all 0.5s ease;
  transform: ${({ isOpen }) =>
    isOpen ? 'scale(1) translateY(50px)' : 'scale(0.6) translateY(20px)'};
  background-color: #fcfcfc;
  flex-direction: column;
  padding-top: 240px;
  ${space};
  ${display};
`;

class Header extends Component {
  state = {
    isMenuOpen: false
  };

  handleHamburgerClick = () => {
    this.setState(currentState => ({
      isMenuOpen: !currentState.isMenuOpen
    }));
  };

  handleLinkClick = () => {
    this.setState({
      isMenuOpen: false
    });
  };

  render() {
    const { isMenuOpen } = this.state;
    const { theme } = this.props;

    return (
      <FlexHeader
        mb={['89px', '80px', '48px', '48px', '64px', '64px']}
        is="header"
        height="80px"
        alignItems="center"
        justifyContent="space-between">
        <HideForPaths whitelist={false} paths={['/']}>
          <Column>
            <Link exact to="/">
              <Logo />
            </Link>
          </Column>
          <Nav is="nav" display={['none', 'none', 'flex', 'flex']}>
            <MenuLinks />
          </Nav>
          <Column display={['block', 'block', 'none', 'none']}>
            <Hamburger
              isOpen={isMenuOpen}
              onClick={this.handleHamburgerClick}
            />
          </Column>
          <MobileNav
            display={['flex', 'flex', 'none', 'none']}
            isOpen={isMenuOpen}
            px={theme.containerMargins}>
            <MenuLinks onClick={this.handleLinkClick} mb={['32px', '72px']} />
          </MobileNav>
        </HideForPaths>
      </FlexHeader>
    );
  }
}

Header.propTypes = {};
Header.defaultProps = {};

export default withTheme(Header);
