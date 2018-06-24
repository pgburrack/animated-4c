import React from 'react';
import { withSiteData, Head } from 'react-static';
//
import logoImg from '../logo.png';

export default withSiteData(({ title }) => (
  <div>
    <Head>{title} s</Head>
    <h1 style={{ textAlign: 'center' }}>Welcome to</h1>
    <img src={logoImg} alt="" />
  </div>
));
