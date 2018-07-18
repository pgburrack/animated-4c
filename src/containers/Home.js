import React from 'react';
import { withSiteData, Head, Route, Switch, NavLink } from 'react-static';
import { Column, Row } from '../grid';
import Intro from '../home/Intro';
import Archives from '../home/Archives';

export default withSiteData(({ title }) => (
  <Row
    justifyContent="space-between"
    flexDirection={['column', 'column', 'row', 'row']}>
    <Head>{title} Home page</Head>
    <Column width={4 / 12}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/archives">Archives</NavLink>
    </Column>
    <Column width={1 / 2}>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/archives" component={Archives} />
      </Switch>
    </Column>
  </Row>
));
