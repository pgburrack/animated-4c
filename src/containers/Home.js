import React from 'react';
import { withSiteData, Head, Route, Switch, NavLink } from 'react-static';
import { Column, Row } from '../grid';
import Intro from '../home/Intro';
import Projects from '../home/Projects';
import Project from '../home/Project';

export default withSiteData(({ title }) => (
  <Row
    justifyContent="space-between"
    flexDirection={['column', 'column', 'row', 'row']}>
    <Head>{title} Home page</Head>
    <Column width={4 / 12}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/archives">Archives</NavLink>
      <NavLink to="/archives/1">Project 1</NavLink>
    </Column>
    <Column width={1 / 2}>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/archives" component={Projects} />
        <Route exact path="/archives/:id" component={Project} />
      </Switch>
    </Column>
  </Row>
));
