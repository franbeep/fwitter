import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import FeedItem from './feed-item';
import { generateFeedItem } from '../../data/feed';

const useStyles = makeStyles(theme => ({
  feed: {
    marginTop: '0.5em',
  },
}));

export default function FeedContainer() {
  const classes = useStyles();

  const initialFeeds = new Array(5).fill(1).map(_ => generateFeedItem());

  return (
    <Box>
      <Typography
        variant="h4"
        component="h2"
        className={classes.feed}
        paragraph
      >
        # Trending
      </Typography>
      {initialFeeds.map((feed, index) => (
        <FeedItem key={index} {...feed} />
      ))}
    </Box>
  );
}
