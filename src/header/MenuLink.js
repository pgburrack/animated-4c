import { Link } from 'react-static';
import styled from 'styled-components';
import { fontSize, lineHeight } from 'styled-system';

export default styled(Link)`
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 2px;
  color: #7f7f7f;
  margin-right: 36px; // TODO: this might need to change

  &:last-child {
    margin-right: 0;
  }
  ${fontSize};
  ${lineHeight};
`;
