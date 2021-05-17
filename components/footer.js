import PropTypes from 'prop-types';
import React, { Children } from 'react';
import Link from 'next/link';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar, Badge, Grid, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    'marginTop': '3em',
    '& a': {
      'color': 'inherit',
      'textDecoration': 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '& span': {},
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.root}>
      <Typography variant="caption">
        <Box component="span" style={{ float: 'right' }}>
          <Link href="#">Privacy Policy</Link> •{' '}
          <Link href="#">Terms of Service</Link>
        </Box>
        <br />
        Copyright © 2021 Fwitter, All rights reserved
      </Typography>
    </Box>
  );
}
