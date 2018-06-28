// page breakpoints
const breakpoints = ['360px', '600px', '720px', '840px', '1280px', '1440px'];

const xSmallColumns = 4;
const xSmallColumn = 72;
const xSmallGutter = 16;
const xSmallBreakpoint = 360;
const xSmallMargin = 12;

const smallColumns = 8;
const smallColumn = 56;
const smallGutter = 16;
const smallBreakpoint = 600;
const smallMargin = 20;

const mediumColumns = 8;
const mediumColumn = 64;
const mediumGutter = 24;
const mediumBreakpoint = 720;
const mediumMargin = 20;

const largeColumns = 12;
const largeColumn = 56;
const largeGutter = 12;
const largeBreakpoint = 840;
const largeMargin = 20;

const xlargeColumns = 12;
const xlargeColumn = 78;
const xlargeGutter = 24;
const xlargeBreakpoint = 1280;
const xlargeMargin = 42;

const xxlargeColumns = 12;
const xxlargeColumn = 88;
const xxlargeGutter = 24;
const xxlargeBreakpoint = 1440;
const xxlargeMargin = 58;

const space = [
  `${xSmallGutter / 2}px`,
  `${smallGutter / 2}px`,
  `${mediumGutter / 2}px`,
  `${largeGutter / 2}px`,
  `${xlargeGutter / 2}px`,
  `${xxlargeGutter / 2}px`
];

const containerMargins = [
  xSmallMargin,
  smallMargin,
  mediumMargin,
  largeMargin,
  xlargeMargin,
  xxlargeMargin
];

const numOfCols = [
  xSmallColumns,
  smallColumns,
  mediumColumns,
  largeColumns,
  xlargeColumns,
  xxlargeColumns
];

const colWidth = [
  xSmallColumn,
  smallColumn,
  mediumColumn,
  largeColumn,
  xlargeColumn,
  xxlargeColumn
];

const colWidthPer = [
  xSmallColumn / xSmallBreakpoint,
  smallColumn / smallBreakpoint,
  mediumColumn / mediumBreakpoint,
  largeColumn / largeBreakpoint,
  xlargeColumn / xlargeBreakpoint,
  xxlargeColumn / xxlargeBreakpoint
];

const theme = {
  breakpoints,
  colors: {
    black: '#2b2b2b',
    'pine-green': '#071d2c'
  },
  space,
  containerMargins,
  numOfCols,
  colWidth,
  colWidthPer
};

export default theme;
