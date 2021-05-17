import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import FeedItem from './feed/feed-item';
import { generateFeedItem } from '../data/feed';

const useStyles = makeStyles(theme => ({
  feed: {
    marginTop: '0.5em',
  },
}));

export default function UserFeed({ user }) {
  const classes = useStyles();

  const initialFeeds = new Array(5).fill(1).map(_ => generateFeedItem(user));

  return (
    <Box>
      {initialFeeds.map((feed, index) => (
        <FeedItem key={index} {...feed} />
      ))}
    </Box>
  );
}

UserFeed.propTypes = {
  // !not really necessary
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
};
