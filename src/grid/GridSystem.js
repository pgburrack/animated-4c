// import React from 'react';
//
// import { withTheme } from 'styled-components';
// import { Box, Flex } from 'grid-styled';
// import { FlexFooter, FlexHeader, FlexSection } from './Flex';
// import { Footer, Header, Nav, Section } from './Box';
//
// const ContainerFluid = props => (
//   <Box {...props} mx={props.theme.containerMargins} />
// );
//
// const ContainerWithTheme = withTheme(ContainerFluid);
// export { ContainerWithTheme as Container };
// const Row = props => {
//   const flexProps = {
//     ...props,
//     mx: [-0, -1, -2, -3, -4, -5]
//   };
//
//   if (props.is === 'div') return <Flex {...flexProps} />;
//   if (props.is === 'header') return <FlexHeader {...flexProps} />;
//   if (props.is === 'section') return <FlexSection {...flexProps} />;
//   if (props.is === 'footer') return <FlexFooter {...flexProps} />;
// };
//
// Row.defaultProps = {
//   is: 'div'
// };
//
// const Column = props => {
//   const { col, theme, auto } = props;
//   const boxProps = { ...props, display: 'block', px: [0, 1, 2, 3, 4, 5] };
//
//   if (col) {
//     const width = col ? [...theme.colWidthPer] : null;
//     boxProps.width = width;
//     boxProps.flex = 'none';
//   } else if (auto) {
//     boxProps.flex = '0 0 auto';
//   } else {
//     boxProps.flex = '1 1 0';
//   }
//
//   if (props.is === 'div') return <Box {...boxProps} />;
//   if (props.is === 'header') return <Header {...boxProps} />;
//   if (props.is === 'section') return <Section {...boxProps} />;
//   if (props.is === 'footer') return <Footer {...boxProps} />;
//   if (props.is === 'nav') return <Nav {...boxProps} />;
// };
//
// Column.defaultProps = {
//   is: 'div',
//   auto: true
// };
//
// const ColumnWithTheme = withTheme(Column);
// export { ColumnWithTheme as Column, Row };
