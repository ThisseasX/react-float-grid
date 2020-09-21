import { makeStyles } from '@material-ui/core/styles';

const styles = {
  grid: {
    margin: '-8px',
    '& > div': {
      margin: '8px',
    },
    userSelect: 'none',
  },

  item: {
    float: 'left',
    width: 'calc(100% / 3 * 2 - 16px)',
    height: '120px',
    boxSizing: 'border-box',
  },
  itemPaper: {
    height: '100%',
    boxSizing: 'border-box',
  },

  itemRight: {
    float: 'right',
    width: 'calc(100% / 3 - 16px)',
    height: '256px',
    boxSizing: 'border-box',
  },
  itemRightPaper: {
    height: '100%',
    backgroundColor: 'red !important',
    boxSizing: 'border-box',
  },

  expanded33: {
    width: 'calc(100% / 3 - 16px)',
  },
  expanded50: {
    width: 'calc(50% - 16px)',
  },
  expanded66: {
    width: 'calc(100% / 3 * 2 - 16px)',
  },
  expanded100: {
    width: 'calc(100% - 16px)',
  },

  expandedRight33: {
    height: 'calc(120px * 1 + 16px * 0)',
  },
  expandedRight50: {
    height: 'calc(120px * 2 + 16px * 1)',
  },
  expandedRight66: {
    height: 'calc(120px * 3 + 16px * 2)',
  },
  expandedRight100: {
    height: 'calc(120px * 4 + 16px * 3)',
  },
};

export default makeStyles(styles);
