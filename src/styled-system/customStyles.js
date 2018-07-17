import { style } from 'styled-system';

export const transform = style({
  // React prop name
  prop: 'transform',
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'transform',
  // key for theme values
  key: 'transform',
  // convert number values to pixels
  numberToPx: false,
  // accessor function for transforming the value
  getter: n => n,
  // shorthand alias React prop name
  alias: 'tf'
});
