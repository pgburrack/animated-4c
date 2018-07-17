import React from 'react';
import { withSiteData, Head } from 'react-static';
import { Column, Row } from '../grid';
import Intro from '../home/Intro';

export default withSiteData(({ title }) => (
  <Row
    justifyContent="space-between"
    flexDirection={['column', 'column', 'row', 'row']}>
    <Head>{title} Home page</Head>
    <Column width={4 / 12}>1</Column>
    <Column width={4 / 12}>
      <Intro />
    </Column>
  </Row>
));
