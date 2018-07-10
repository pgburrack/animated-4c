import styled from 'styled-components';
import { fontSize, lineHeight } from 'styled-system';

const Text = styled.span`
  ${fontSize};
  ${lineHeight};
  color: ${props => props.theme.colors.black};
`;

export default Text;
