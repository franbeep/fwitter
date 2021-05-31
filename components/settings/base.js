import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    'padding': theme.spacing(3),
    // 'justifyContent': 'space-around',
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function BaseSettings({
  item,
  title,
  children,
  className,
  ...rest
}) {
  const classes = useStyles();

  if (item)
    return (
      <Grid item className={className} {...rest}>
        {children}
      </Grid>
    );

  return (
    <Grid
      container
      spacing={3}
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Grid item xs={12}>
        <Typography variant="h5">{title}</Typography>
      </Grid>

      {children}
    </Grid>
  );
}

BaseSettings.propTypes = {
  item: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.any,
};
