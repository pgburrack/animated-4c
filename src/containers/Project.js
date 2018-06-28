import React from 'react';
import styled from 'styled-components';
import { Column, Row } from '../grid';
//

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: right;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 22px;
`;

const ImmersiveStoryte = styled.div`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: ${({ theme }) => theme.colors['greyish-brown']};
`;

const HanselGretelIsA = styled(Column)`
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #636363;
`;

export default () => (
  <div>
    <Row is="section">
      <HanselGretelIsA auto={false}>
        Hansel & Gretel is an immersive storytelling suite for content creators
        to analyze, optimize their 360 videos, through understanding how the
        viewers are deviating from the point of interest and guide them with
        Real-Time Visual cues.
      </HanselGretelIsA>
      <Column auto={false}>
        <Title>Hansel & Gretel</Title>
        <ImmersiveStoryte>
          HAn Immersive Storytelling Suite for 360 Degree Video
        </ImmersiveStoryte>
      </Column>
    </Row>
    <p>Project</p>
  </div>
);
