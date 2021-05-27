import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Box } from '@material-ui/core';
import moment from 'moment';

import Avatar from '../avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: theme.spacing(2),
  },
  slug: {
    opacity: 0.7,
  },
}));

export default function Comment({ user, text, date }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={2}>
        <Avatar
          src={user.avatar}
          alt={`${user.name} Avatar`}
          size={'extra-small'}
        />
      </Grid>
      <Grid item xs={10}>
        <Box style={{ marginBottom: '0.5em' }}>
          <Typography variant="subtitle2">{user.name}</Typography>
          <Typography
            variant="subtitle2"
            component="span"
            className={classes.slug}
          >
            <Link href="#">{`@${user.slug}`}</Link>{' '}
          </Typography>
          <Typography variant="subtitle2" component="span">
            • Posted {moment(date).fromNow()}
          </Typography>
        </Box>
        <Typography>{text}</Typography>
      </Grid>
    </Grid>
  );
}

Comment.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
};
