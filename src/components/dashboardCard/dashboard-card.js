import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import useStyles from './style';
import cn from 'clsx';

const DashboardCard = ({ className }) => {
  const classes = useStyles();

  return (
    <Paper className={cn(classes.paper, className)}>
      <Typography variant={'h4'} gutterBottom>
        Header
      </Typography>

      <Typography variant={'body1'}>Some content below the header</Typography>
    </Paper>
  );
};

export default DashboardCard;
