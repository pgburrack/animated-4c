import React from 'react';
import axios from 'axios';
import { ServerStyleSheet } from 'styled-components';

/* eslint-disable no-unused-vars */
export default {
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Spectral:300,400,500,600,700,800"
          rel="stylesheet"
        />
        {renderMeta.styleTags}
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();
    const html = render(sheet.collectStyles(<Comp />));
    meta.styleTags = sheet.getStyleElement();
    return html;
  },
  getSiteData: () => ({
    title: 'Yihan ZHOU'
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return [
      {
        path: '/',
        component: 'src/containers/Home'
      },
      {
        path: '/projects',
        component: 'src/containers/Projects'
      },
      {
        path: '/about',
        component: 'src/containers/About'
      },
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post
          })
        }))
      },
      {
        path: '/projects/:id',
        component: 'src/containers/Project'
      },
      {
        is404: true,
        component: 'src/containers/404'
      }
    ];
  }
};
