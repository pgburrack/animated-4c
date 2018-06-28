import React from 'react';
import Flex, { FlexFooter, FlexHeader, FlexSection } from './Flex';

const Row = props => {
  const flexProps = {
    ...props,
    mx: [-0, -1, -2, -3, -4, -5]
  };

  if (props.is === 'div') return <Flex {...flexProps} />;
  if (props.is === 'header') return <FlexHeader {...flexProps} />;
  if (props.is === 'section') return <FlexSection {...flexProps} />;
  if (props.is === 'footer') return <FlexFooter {...flexProps} />;
};

Row.defaultProps = {
  is: 'div'
};

export default Row;
