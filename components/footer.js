import React from 'react';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import clsx from 'clsx';

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

export default function Footer({ className, ...rest }) {
  const classes = useStyles();

  return (
    <Box component="footer" className={clsx(classes.root, className)} {...rest}>
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

Footer.propTypes = {};
