import React from 'react';

import { withTheme } from 'styled-components';
import Box from './Box';

const ContainerFluid = props => (
  <Box {...props} mx={props.theme.containerMargins} />
);

const ContainerWithTheme = withTheme(ContainerFluid);

export default ContainerWithTheme;
