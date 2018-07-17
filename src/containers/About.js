import React from 'react';

import { lineHeight, width } from 'styled-system';
import styled from 'styled-components';
import tag from 'clean-tag';
import about1 from '../images/about1.jpg';
import about2 from '../images/about2.JPG';
import { Row, Column } from '../grid';
import Img from '../shared/Img';

const Text = styled(Column)`
  ${lineHeight};
`;

const Paragraph = styled(tag.p)`
  margin-bottom: 24px;
`;

export default () => (
  <Row flexDirection={['column', 'column', 'row', 'row']}>
    <Column mb={4} pr={[0, 0, 4, 4]} width={[1, 1, 1 / 2]}>
      <Img alt="portfolio" src={about1} />
      <Img alt="me" src={about2} />
    </Column>
    <Text
      lineHeight="1.5"
      color="black"
      fontSize={[2, 2, 3]}
      width={[1, 1, 1 / 2]}>
      <Paragraph>
        This is Zhengzhou. I grew up in this artistic community on the outskirts
        of the Chinese mainland city. I have vivid memories like this picture:
        the Wind-worn arch with Suzhou Garden style,&nbsp;towering Wutong tree
        along the street seemed to hold the weight of the sky, a group of people
        gathering under them for painting, sculpturing or singing in a sunny
        afternoon,&nbsp;quirky sparrows turned the hands of the clock forward,
        wind it another year. Growing up in this community and a family loving
        music and art, I have been lucky enough to always feel passionate for
        art and design since I was a kid.&nbsp;
      </Paragraph>
      <Paragraph>
        Design has been my experience knowledge since 2009 when I first went to
        Guangzhou Academy of Fine arts to study graphic design, painting,
        illustration and art history. After graduation,&nbsp;I decided to come
        to New York, and study interaction design and creative coding in{' '}
        <a href="https://www.newschool.edu/parsons/mfa-design-technology/">
          MFA, design and technology at Parsons
        </a>&nbsp;to expand my learning for design to more dimensions.
      </Paragraph>
      <Paragraph>
        It gave me the chance to experience in interaction design, creative
        coding, animation and game design, which have trained me to always think
        solving design questions in service-oriented and multidisciplinary
        perspectives.
      </Paragraph>
      <Paragraph>
        I was lucky enough to meet a collective of friends and make fun games
        and VR projects by founding{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://phosphenedesigns.com">
          Phosphene Designs
        </a>&nbsp;(Find our game{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://store.steampowered.com/app/566180/Fractal/">
          Fractal
        </a>{' '}
        on stream). Meanwhile, I worked with a cross functional team in{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://verizonopeninnovation.com/">
          Verizon Verizon Open Innovation
        </a>{' '}
        researching 360 video creation. Right now I am part of the design team
        in{' '}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="http://dailymotion.com">
          Dailymotion
        </a>, building and maintaining the design system for Project Leo.&nbsp;
      </Paragraph>
      <p>
        Thank you for visiting my site, and checking out the works I have
        done.&nbsp;Don't be a stranger, drop me a line for any thoughts.&nbsp;
      </p>
    </Text>
  </Row>
);
