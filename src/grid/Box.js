import styled from 'styled-components';
import {
  space,
  width,
  flex,
  color,
  fontSize,
  order,
  alignSelf,
  display
} from 'styled-system';
import tag from 'clean-tag';
import theme from './theme';

const Box = styled(tag)(
  [],
  { boxSizing: 'border-box' },
  width,
  space,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  display
);

export const Section = Box.withComponent(tag.section);
export const Header = Box.withComponent(tag.header);
export const Footer = Box.withComponent(tag.footer);
export const Nav = Box.withComponent(tag.nav);

Box.displayName = 'Box';

Box.defaultProps = {
  theme
};

Box.propTypes = {
  ...width.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
  ...display.propTypes
};

export default Box;
