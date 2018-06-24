import { Link } from 'react-static';
import styled from 'styled-components';

export default styled(Link)`
  font-size: 1.25rem;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: 2px;
  color: #7f7f7f;
  margin-right: 38px; // TODO: this might need to change

  &:last-child {
    margin-right: 0;
  }
`;
