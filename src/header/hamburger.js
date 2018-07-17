import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { space, display } from 'styled-system';
import { transform } from '../styled-system/customStyles';

const Bun = styled.span`
  width: 24px;
  height: 2px;
  background-color: ${props => props.theme.colors.slate};
  ${space};
  display: block;
  transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1),
    background-color 1s cubic-bezier(0.23, 1, 0.32, 1);
  ${transform};
  position: absolute;
`;

const Sandwich = styled.button`
  outline: 0;
  background: none;
  border: 0;
  padding: 0;
  width: 34px;
  display: flex;
  justify-content: center;
  height: 34px;
  transform: translateZ(0);
  position: relative;
  ${display};
`;

// TODO: add onTouch event
const Hamburger = ({ onClick, isOpen, display }) => (
  <Sandwich display={display} onClick={onClick}>
    <Bun
      tf={`${isOpen ? 'rotate(45deg)' : 'translateY(-3.75px)'} translateZ(0)`}
    />
    <Bun
      tf={`${isOpen ? 'rotate(-45deg)' : 'translateY(3.75px)'} translateZ(0)`}
    />
  </Sandwich>
);

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  display: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};

export default Hamburger;
