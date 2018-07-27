import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 1.2;
  color: ${props => props.theme.colors.black};
  margin-bottom: 8px;
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 1.2;
  color: ${props => props.theme.colors.black};
  margin-bottom: 12px;
`;

const Link = styled.a`
  color: ${props => props.theme.colors.perrywinkle};
`;

const Intro = () => (
  <div>
    <Title>Hello, I’m Yihan.</Title>
    <Paragraph>
      Currently living in New York, working with{' '}
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.dailymotion.com/">
        Dailymotion.
      </Link>
    </Paragraph>
    <Paragraph>
      Previously, designing for{' '}
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="http://verizonopeninnovation.com/">
        Verizon
      </Link>,
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.foxbusiness.com/">
        Fox
      </Link>, and{' '}
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="http://www.sudler.com/">
        Sulder & Hannesey
      </Link>, and studying at the{' '}
      <Link
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.newschool.edu/parsons/mfa-design-technology/">
        Parsons, the school of design
      </Link>.
    </Paragraph>
  </div>
);

export default Intro;
