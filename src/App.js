import React from 'react';
import { Router, Route, cleanPath } from 'react-static';
import styled from 'styled-components';
import { easeQuadOut } from 'd3-ease';
import { NodeGroup } from 'react-move';
import { withContext, getContext } from 'recompose';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import Routes from 'react-static-routes';
import './app.css';

import Header from './shared/Header';

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
            scale: 1,
            translateY: [10]
          })}
          enter={() => ({
            opacity: [1],
            translateY: [0],
            timing: { duration: 200, delay: 200, ease: easeQuadOut }
          })}
          update={() => ({
            opacity: [1]
          })}
          leave={() => ({
            opacity: [0],
            translateY: [-10],
            timing: { duration: 200, ease: easeQuadOut }
          })}>
          {nodes => (
            <div style={{ position: 'relative' }}>
              {nodes.map(({ key, data, state: { opacity, translateY } }) => {
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
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      transform: `translateY(${translateY}px)`,
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

/**
 * YIHan project
 * has 3 sizes:
 * 1440
 * 1280
 * 786
 * 360
 */
/* TODO:
*  define grid - check what grid to choose
*  questions:
*   - should i have a grid system ? are there other options
*   ---------------------------------------
*  options:
*   write my own grid system:
*   pros:
*    - will learn from this
*    - flexible
*   cons:
*    - take time
*    - bugs
* -----------------------------------------
*   components that defines brake points
*    cons:
*
*    using grid-styled:
*    pros:
*     - ready react components
*     - alot of people like this
*
*    cons:
*     - need to learn about there api
* ------------------------------------------
* using react-responsive
*  this is react helper for defining media queries
*  this is not using grid
*
*  question: should i just use it for hide and show content ?
*
* ------------------------------------------
* impromptu-react-animated-header
* pros: give me the behavior i need to the header
* cons: this is only the header
* */

const Content = styled.main`
  padding: 0 48px;
`;

const App = () => (
  <Router>
    <div>
      <Header />
      <Content>
        <Routes component={AnimatedRoutes} />
      </Content>
    </div>
  </Router>
);

export default hot(module)(App);
