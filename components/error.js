import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
}));

export default function BaseError({ title = ':(', message }) {
  const classes = useStyles();

  return (
    <Box className={classes.center}>
      <Typography variant="h1" color="secondary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h3">{message}</Typography>
    </Box>
  );
}

BaseError.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
};
