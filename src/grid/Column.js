import React from 'react';
import { withTheme } from 'styled-components';
import Box, { Footer, Header, Nav, Section } from './Box';

const Column = props => {
  const { col, theme, auto, ...rest } = props;
  const boxProps = { ...rest, display: 'block', px: [0, 1, 2, 3, 4, 5] };

  if (col) {
    boxProps.width = col
      ? theme.colWidthPer.map((width, i) => `${width * col[i] * 100}%`)
      : null;
    boxProps.flex = 'none';
  } else if (auto) {
    boxProps.flex = '0 0 auto';
  } else {
    boxProps.flex = '1 1 0';
  }

  if (props.is === 'div') return <Box {...boxProps} />;
  if (props.is === 'header') return <Header {...boxProps} />;
  if (props.is === 'section') return <Section {...boxProps} />;
  if (props.is === 'footer') return <Footer {...boxProps} />;
  if (props.is === 'nav') return <Nav {...boxProps} />;
};

Column.defaultProps = {
  is: 'div',
  auto: true
};

const ColumnWithTheme = withTheme(Column);
export default ColumnWithTheme;
