import React from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';

import FeedItem from './feed/feed-item';

export default function UserFeedContainer({ content, ...rest }) {
  return (
    <Box {...rest}>
      {content.map((feed, index) => (
        <FeedItem key={index} {...feed} />
      ))}
    </Box>
  );
}

UserFeedContainer.propTypes = {
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
