import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Divider } from '@material-ui/core';

import Comment from './comment';
import { genereateComment } from '../../data/comment';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
  comment: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default function CommentsContainer() {
  const classes = useStyles();

  const initialComments = new Array(5).fill(1).map(_ => genereateComment());

  return (
    <Box className={classes.root}>
      {initialComments.map((comment, index) => (
        <Box key={index} className={classes.comment}>
          <Divider />
          <Comment {...comment} />
        </Box>
      ))}
    </Box>
  );
}
