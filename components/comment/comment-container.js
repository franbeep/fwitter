import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Divider } from '@material-ui/core';

import Comment from './comment';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  comment: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function CommentsContainer({ content, ...rest }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {content.map((comment, index) => (
        <Box key={index} className={classes.comment}>
          <Divider />
          <Comment {...comment} />
        </Box>
      ))}
    </Box>
  );
}

CommentsContainer.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
      text: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date),
    })
  ),
};
