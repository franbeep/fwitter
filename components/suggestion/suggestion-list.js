import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Divider } from '@material-ui/core';
import clsx from 'clsx';
import _ from 'lodash';

import Suggestion from './suggestion';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.grey[300],
    borderRadius: theme.spacing(1),
  },
  suggestion: {
    // padding: theme.spacing(2),
  },
  suggestionParent: {
    display: 'flex',
  },
  title: {
    padding: theme.spacing(1),
  },
  first: {
    // borderRadius: theme.spacing(1),
    borderTop: theme.spacing(1),
  },
  last: {
    borderBottom: theme.spacing(1),
  },
}));

export default function SuggestionList({ content, className, ...rest }) {
  const classes = useStyles();

  return (
    <Box>
      <Box>
        <Typography variant="h5" className={classes.title}>
          Relevant Content
        </Typography>
      </Box>
      <Box className={clsx(classes.root, className)} {...rest}>
        {content.map((suggestion, index) => (
          <Box key={index}>
            {index > 0 && <Divider />}
            <Box className={classes.suggestionParent}>
              <Suggestion {...suggestion} className={classes.suggestion} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

SuggestionList.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      slug: PropTypes.string,
      category: PropTypes.string,
      title: PropTypes.string,
      onFire: PropTypes.bool,
      numberOfFollowers: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    })
  ),
};
