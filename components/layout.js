import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Box, LinearProgress } from '@material-ui/core';

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

function TopProgress() {
  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const routeChangeStart = () => {
      setIsLoading(true);
    };
    const routeChangeComplete = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', routeChangeStart);
    router.events.on('routeChangeComplete', routeChangeComplete);
    router.events.on('routeChangeError', routeChangeComplete);

    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
      router.events.off('routeChangeComplete', routeChangeComplete);
      router.events.off('routeChangeError', routeChangeComplete);
    };
  }, []);

  if (isLoading)
    return (
      <LinearProgress
        color="secondary"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: '9999',
        }}
      />
    );
  return null;
}

export default function Layout({ children, spacing = 2 }) {
  const classes = useStyles();

  const childrenArray = React.Children.toArray(children);
  const [left, middle, right] = childrenArray;

  return (
    <>
      <TopProgress />
      <Container className={classes.root}>
        <Grid container spacing={spacing}>
          <Grid item xs={3} className={classes.marginSticky}>
            <Box className={classes.left} component="nav">
              {left.props.children}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box className={classes.middle} component="main">
              {middle.props.children}
            </Box>
          </Grid>
          <Grid item xs={3} className={classes.marginSticky}>
            <Box className={classes.right}>{right.props.children}</Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

Layout.propTypes = {
  children: function (props, propName, componentName) {
    if (React.Children.count(props.children) != 3)
      throw new Error('Layout requires exactly 3 children components');
  },
  spacing: PropTypes.number,
};
