import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Divider } from '@material-ui/core';

import Avatar from '../avatar';
import { simplifyNumber } from '../../utils';

const FALLBACK_BACKGROUND_IMAGE = '/background/geometry.png';

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
  bold: {
    fontWeight: 'bold',
  },
}));

export default function UserHeadline({ user, backgroundImage }) {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        {/* Background */}
        <Box
          className={classes.media}
          style={{
            background: `url(${backgroundImage}), url(${FALLBACK_BACKGROUND_IMAGE})`,
          }}
        ></Box>
        {/* Avatar */}
        <Avatar
          src={user.avatar}
          alt="User Avatar"
          size="extra-large"
          className={classes.avatar}
        />
        {/* Information */}
        <Box className={classes.textBox}>
          <Typography component="h1" variant="h4">
            {user.name}
          </Typography>
          <Typography
            component="h2"
            variant="h6"
            className={classes.slug}
          >{`@${user.slug}`}</Typography>
          <Typography component="h3" variant="subtitle2">
            <Box className></Box>
            <Typography
              component="span"
              variant="subtitle1"
              className={classes.bold}
            >{`${simplifyNumber(user.postCount)} `}</Typography>
            Posts{' • '}
            <Typography
              component="span"
              variant="subtitle1"
              className={classes.bold}
            >{`${simplifyNumber(user.likesCount)} `}</Typography>{' '}
            Likes{' • '}
            <Typography
              component="span"
              variant="subtitle1"
              className={classes.bold}
            >{`${simplifyNumber(user.followers)} `}</Typography>{' '}
            Followers{' • '}
            <Typography
              component="span"
              variant="subtitle1"
              className={classes.bold}
            >{`${simplifyNumber(user.following)} `}</Typography>
            Following
          </Typography>
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
};
