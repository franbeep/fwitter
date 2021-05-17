import PropTypes from 'prop-types';
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Box } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '2em',
    minHeight: '100vh',
    paddingBottom: '2em',
  },
  left: {
    'position': 'sticky',
    'padding': '1em',
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'end',
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'end',
    },
    'position': 'sticky',
    'top': '0',
  },
  middle: {
    padding: '1em',
    backgroundColor: theme.palette.grey[50],
    marginTop: `-2em`,
    minHeight: '90vh',
  },
  right: {
    // padding: '1em',
    position: 'sticky',
    top: '0',
  },
  marginSticky: {
    marginTop: '2em',
  },
}));

export default function Layout({ children, spacing = 2 }) {
  const classes = useStyles();

  const childrenArray = React.Children.toArray(children);

  const left = childrenArray[0];
  const middle = childrenArray[1];
  const right = childrenArray[2];

  // * good example of zip
  return (
    <Container className={classes.root}>
      <Grid container spacing={spacing}>
        <Grid item xs={3} className={classes.marginSticky}>
          <Box className={classes.left}>{left.props.children}</Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.middle}>{middle.props.children}</Box>
        </Grid>
        <Grid item xs={3} className={classes.marginSticky}>
          <Box className={classes.right}>{right.props.children}</Box>
        </Grid>
      </Grid>
    </Container>
  );
}

Layout.propTypes = {
  children: function (props, propName, componentName) {
    if (React.Children.count(props.children) != 3)
      throw new Error('Layout requires exactly 3 children components');
  },
  spacing: PropTypes.number,
};
