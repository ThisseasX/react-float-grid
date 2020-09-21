import React, { useState } from 'react';
import { DashboardCard, Flipper } from 'components';
import useStyles from './style';
import { reject, eq, includes } from 'lodash/fp';
import cn from 'clsx';

const getClasses = (classes, expandStates, i, isRight) =>
  isRight
    ? {
        [classes.expandedRight33]: expandStates.includes(`${i}-33`),
        [classes.expandedRight50]: expandStates.includes(`${i}-50`),
        [classes.expandedRight66]: expandStates.includes(`${i}-66`),
        [classes.expandedRight100]: expandStates.includes(`${i}-100`),
      }
    : {
        [classes.expanded33]: expandStates.includes(`${i}-33`),
        [classes.expanded50]: expandStates.includes(`${i}-50`),
        [classes.expanded66]: expandStates.includes(`${i}-66`),
        [classes.expanded100]: expandStates.includes(`${i}-100`),
      };

const Dashboard = () => {
  const classes = useStyles();

  const [expandStates, setExpandStates] = useState([
    '0-66', // First block is 2/3 wide
    '1-50', // Second (Red) block is 1/2 high
    '2-66', // Third block is 2/3 wide
    '3-33', // Fourth block is 1/3 wide
    '4-33', // Fifth block is 1/2 wide
    '5-33', // Sixth block is 1/2 wide
  ]);

  const handleClick = i => () => {
    setExpandStates(expandStates => {
      const value33 = `${i}-33`;
      const value50 = `${i}-50`;
      const value66 = `${i}-66`;
      const value100 = `${i}-100`;

      const is33 = includes(value33, expandStates);
      const is50 = includes(value50, expandStates);
      const is66 = includes(value66, expandStates);
      const is100 = includes(value100, expandStates);

      const result = is33
        ? [...reject(eq(value33), expandStates), value50]
        : is50
        ? [...reject(eq(value50), expandStates), value66]
        : is66
        ? [...reject(eq(value66), expandStates), value100]
        : is100
        ? [...reject(eq(value100), expandStates), value33]
        : expandStates;

      return result;
    });
  };

  return (
    <div className={classes.grid}>
      {Array(6)
        .fill()
        .map((_, i) => (
          <Flipper
            key={i}
            className={cn(
              i === 1 ? classes.itemRight : classes.item,
              getClasses(classes, expandStates, i, i === 1),
            )}
            onClick={handleClick(i)}
          >
            <DashboardCard
              className={i === 1 ? classes.itemRightPaper : classes.itemPaper}
            />
          </Flipper>
        ))}
    </div>
  );
};

export default Dashboard;
