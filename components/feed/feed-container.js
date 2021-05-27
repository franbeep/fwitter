import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

import FeedItem from './feed-item';

const useStyles = makeStyles(theme => ({
  feed: {
    marginTop: '0.5em',
  },
}));

export default function FeedContainer({ content, ...rest }) {
  const classes = useStyles();

  return (
    <Box {...rest}>
      <Typography
        variant="h4"
        component="h2"
        className={classes.feed}
        paragraph
      >
        # Trending
      </Typography>
      {content.map((feed, index) => (
        <FeedItem key={index} {...feed} />
      ))}
    </Box>
  );

  // TODO: Pagination/Load More
}

FeedContainer.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      }),
      date: PropTypes.instanceOf(Date).isRequired,
      body: PropTypes.string.isRequired,
      image: PropTypes.string,
      isOnline: PropTypes.bool,
      likes: PropTypes.number,
      comments: PropTypes.number,
    })
  ),
};
