import React from 'react';
import Link from 'next/link';

import { Grid, Typography, List, ListItem, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    'padding': theme.spacing(3),
    'justifyContent': 'space-around',
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
  activity: {
    '& li:nth-child(2n)': {
      background: theme.palette.grey[200],
    },
  },
  slug: {
    opacity: 0.7,
  },
}));

export default function ViewActivity() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h5">Activity</Typography>
      </Grid>

      <Grid item xs={1}>
        <Divider orientation="vertical" style={{ width: '8px' }} />
      </Grid>

      <Grid item xs={11}>
        <List className={classes.activity}>
          <ListItem>
            <Typography variant="subtitle1">
              <Typography component="span" className={classes.slug}>
                <Link href="#">@MyTestSlug</Link>
              </Typography>{' '}
              commented on your{' '}
              <Typography component="span" color="secondary">
                <Link href="#">post</Link>
              </Typography>{' '}
              7 minutes ago
            </Typography>
          </ListItem>

          <ListItem>
            <Typography variant="subtitle1">
              <Typography component="span" className={classes.slug}>
                <Link href="#">@MyTestSlug</Link>
              </Typography>{' '}
              commented on your{' '}
              <Typography component="span" color="secondary">
                <Link href="#">post</Link>
              </Typography>{' '}
              7 minutes ago
            </Typography>
          </ListItem>

          <ListItem>
            <Typography variant="subtitle1">
              <Typography component="span" className={classes.slug}>
                <Link href="#">@MyTestSlug</Link>
              </Typography>{' '}
              commented on your{' '}
              <Typography component="span" color="secondary">
                <Link href="#">post</Link>
              </Typography>{' '}
              7 minutes ago
            </Typography>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
