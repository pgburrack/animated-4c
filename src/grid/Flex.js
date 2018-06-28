import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
} from 'styled-system';
import styled from 'styled-components';
import Box, { Header, Footer, Section } from './Box';

const Flex = styled(Box)(
  [],
  { display: 'flex' },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);

const FlexFooter = styled(Footer)(
  [],
  { display: 'flex' },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);

const FlexHeader = styled(Header)(
  [],
  { display: 'flex' },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);

const FlexSection = styled(Section)(
  [],
  { display: 'flex' },
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);

FlexSection.displayName = 'FlexSection';
FlexHeader.displayName = 'FlexHeader';
FlexFooter.displayName = 'FlexFooter';
Flex.displayName = 'Flex';

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
};

FlexSection.propTypes = {
  ...Flex.propTypes
};
FlexHeader.propTypes = {
  ...Flex.propTypes
};
FlexFooter.propTypes = {
  ...Flex.propTypes
};
FlexHeader.displayName = 'FlexHeader';
FlexFooter.displayName = 'FlexFooter';

export { FlexFooter, FlexHeader, FlexSection };
export default Flex;
