import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box } from '@material-ui/core';

import { SubMenu, ActionBar, BaseContent, AvatarBox } from '../feed/feed-item';

const useStyles = makeStyles(theme => ({
  root: {
    'paddingTop': '1em',
    'paddingBottom': '1em',
    'marginTop': '0',
    'marginBottom': '0',
    'borderRadius': theme.spacing(1),
    'position': 'relative',
    // '&:hover': {
    //   backgroundColor: theme.palette.grey[200],
    // },
    '& a': {
      'color': 'inherit',
      'textDecoration': 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}));

export default function PostElement({
  user,
  date,
  body,
  image = null,
  isOnline = false,
  likes = 0,
  comments = 0,
}) {
  const classes = useStyles();

  return (
    <Box component="article">
      <Grid container spacing={2} className={classes.root}>
        <SubMenu />
        <Grid item xs={3}>
          {/* avatar */}
          <AvatarBox user={user} isOnline={isOnline} size="medium" />
        </Grid>
        <Grid item xs={8}>
          {/* content */}
          <BaseContent user={user} date={date} body={body} image={image} />
          <ActionBar comments={comments} likes={likes} />
        </Grid>
      </Grid>
    </Box>
  );
}

PostElement.propTypes = {
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
};
