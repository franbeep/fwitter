import PropTypes from 'prop-types';
import React, { Children } from 'react';
import Image from 'next/image';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Divider } from '@material-ui/core';

import Avatar from './avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  slug: {
    opacity: 0.7,
  },
  media: {
    position: 'relative',
    height: '256px',
    width: 'calc(100% + 2em)',
    marginTop: '-2em',
  },
  textBox: {
    textAlign: 'center',
  },
  avatar: {
    border: `7px ${theme.palette.background.default} solid`,
    marginTop: '-4em',
  },
}));

export default function UserHeadline({
  user,
  backgroundImage,
  fallbackBackgroundImage = '/background/geometry.png', // TODO: add default background to process.env
}) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box
          className={classes.media}
          style={{
            background: `url(${backgroundImage}), url(${fallbackBackgroundImage})`,
          }}
        ></Box>
        <Avatar
          src={user.avatar}
          alt="User Avatar"
          size="extra-large"
          className={classes.avatar}
        />
        <Box className={classes.textBox}>
          <Typography component="h1" variant="h4">
            {user.name}
          </Typography>
          <Typography
            component="h2"
            variant="h6"
            className={classes.slug}
          >{`@${user.slug}`}</Typography>
          <Typography
            component="h3"
            variant="subtitle1"
          >{`${user.postCount} Posts • ${user.likesCount} Likes • ${user.followers} Followers • ${user.following} Following`}</Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

UserHeadline.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    postCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    likesCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    followers: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    following: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
  }).isRequired,
  backgroundImage: PropTypes.string,
  fallbackBackgroundImage: PropTypes.string,
};
