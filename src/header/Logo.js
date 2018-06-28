import React from 'react';
import styled from 'styled-components';

const YihanAsLogo = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1;
  letter-spacing: 2px;
  color: ${props => props.theme.colors['pine-green']};
`;

const Logo = () => <YihanAsLogo>YIHAN ZHOU</YihanAsLogo>;

export default Logo;
