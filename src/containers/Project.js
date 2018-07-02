import React from 'react';
import styled from 'styled-components';
import { fontSize, lineHeight, textAlign } from 'styled-system';
import { Column, Row } from '../grid';

const Title = styled.h1`
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: right;
  color: ${({ theme }) => theme.colors.black};
  ${fontSize};
  ${lineHeight};
  ${textAlign};
`;

const HanselGretelIsA = styled(Column)`
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #636363;
  ${fontSize};
  ${lineHeight};
`;

// col={[4, 8, 7, 9, 6, 6]}
export default () => (
  <div>
    <Row
      alignItems={[
        'flex-end',
        'flex-end',
        'flex-end',
        'flex-end',
        'stretch',
        'stretch'
      ]}
      flexDirection={[
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'column-reverse',
        'row',
        'row'
      ]}
      is="section">
      <HanselGretelIsA
        width={[1, 1, 7 / 8, 9 / 12, 1 / 2, 1 / 2]}
        lineHeight={[1.2, 1.2, 1.2, 1.2, 1.33, 1.33]}
        fontSize={['20px', '20px', '20px', '20px', '24px', '24px']}
        auto={false}>
        Hansel & Gretel is an immersive storytelling suite for content creators
        to analyze, optimize their 360 videos, through understanding how the
        viewers are deviating from the point of interest and guide them with
        Real-Time Visual cues.
      </HanselGretelIsA>
      <Column width={[1, 1, 7 / 8, 9 / 12, 1 / 2, 1 / 2]} auto={false}>
        <Title
          textAlign={['left', 'right', 'right']}
          lineHeight={[1.33, 1.25, 1.25, 1.25, 1.2, 1.2]}
          fontSize={['24px', '32px', '32px', '32px', '40px', '40px']}>
          Hansel & Gretel
        </Title>
      </Column>
    </Row>
    <p>Project</p>
  </div>
);
