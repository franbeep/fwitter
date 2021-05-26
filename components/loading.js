import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Inspired by the former Facebook spinners.
const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  top: {
    color: theme.palette.secondary.main,
    animationDuration: '750ms',
    position: 'absolute',
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

export default function Loading({ ...rest }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        thickness={4}
        value={100}
        {...rest}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        thickness={4}
        {...rest}
      />
    </div>
  );
}
