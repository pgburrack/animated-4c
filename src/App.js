import React, { Fragment } from 'react';
import { Router, Route, cleanPath } from 'react-static';
import { ThemeProvider } from 'styled-components';
import { easeQuadOut } from 'd3-ease';
import { NodeGroup } from 'react-move';
import { withContext, getContext } from 'recompose';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import Routes from 'react-static-routes';
import './app.css';

import Header from './shared/Header';
import { theme, Container } from './grid';

// The magic :)
const AnimatedRoutes = getContext({
  // We have to preserve the router context for each route
  // otherwise, a component may rerender with the wrong data
  // during animation
  router: PropTypes.object,
  // We'll also look for the staticURL, so we can disable the animation during static render
  staticURL: PropTypes.string
})(({ getComponentForPath, router, staticURL }) => (
  <Route
    path="*"
    render={props => {
      // Get the component for this path
      let Comp = getComponentForPath(cleanPath(props.location.pathname));
      if (!Comp) {
        Comp = getComponentForPath('404');
      }

      // When we're rendering for static HTML, be sure to NOT animate in.
      if (staticURL) {
        return (
          // This relative wrapper is necessary for accurate rehydration :)
          <div style={{ position: 'relative' }}>
            <Comp {...props} />
          </div>
        );
      }

      // Use React-Move to animate the different components coming in and out
      return (
        <NodeGroup
          // React-move will handle the entry and exit of any items we pass in `data`
          data={[
            {
              // pass the current Comp, props, ID and router
              id: props.location.pathname,
              Comp,
              props,
              router
            }
          ]}
          keyAccessor={d => d.id}
          start={() => ({
            opacity: [0],
            scale: 1
          })}
          enter={() => ({
            opacity: [1],
            timing: { duration: 200, delay: 200, ease: easeQuadOut }
          })}
          update={() => ({
            opacity: [1]
          })}
          leave={() => ({
            opacity: [0],
            timing: { duration: 200, ease: easeQuadOut }
          })}>
          {nodes => (
            <div style={{ position: 'relative' }}>
              {nodes.map(({ key, data, state: { opacity } }) => {
                // Here, we override the router context with the one that was
                // passed with each route
                const PreservedRouterContext = withContext(
                  {
                    router: PropTypes.object
                  },
                  () => ({
                    router: data.router
                  })
                )(props => <div {...props} />);

                return (
                  <PreservedRouterContext
                    key={key}
                    style={{
                      opacity
                    }}>
                    <data.Comp {...data.props} />
                  </PreservedRouterContext>
                );
              })}
            </div>
          )}
        </NodeGroup>
      );
    }}
  />
));

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Container maxWidth={theme.breakpoints[theme.breakpoints.length - 1]}>
          <Header />
          <Routes component={AnimatedRoutes} />
        </Container>
      </Fragment>
    </ThemeProvider>
  </Router>
);

export default hot(module)(App);
