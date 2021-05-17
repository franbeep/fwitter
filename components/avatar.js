import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar, Badge } from '@material-ui/core';

import Image from 'next/image';

export const OnlineBadge = withStyles(theme => ({
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
  'badge': {
    'backgroundColor': '#44b700',
    'color': '#44b700',
    'boxShadow': `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}))(Badge);

export const OfflineBadge = withStyles(theme => ({
  badge: {
    'backgroundColor': '#bababa',
    'color': '#bababa',
    'boxShadow': `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}))(Badge);

export const AwayBadge = withStyles(theme => ({
  badge: {
    'backgroundColor': '#ff850a',
    'color': '#ff850a',
    'boxShadow': `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1px solid currentColor',
      content: '""',
    },
  },
}))(Badge);

const useStyles = makeStyles(theme => ({
  'root': {
    'display': 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  'extra-small': {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  'small': {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  'medium': {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  'large': {
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  'extra-large': {
    width: theme.spacing(22),
    height: theme.spacing(22),
  },
}));

export default function AvatarComponent({
  src,
  alt,
  size = 'medium',
  badge = null,
  className,
  rest,
}) {
  const classes = useStyles();

  const avatar = (
    <Avatar className={clsx(classes[size], className)} {...rest}>
      <Image src={src} alt={alt} layout="fill" />
    </Avatar>
  );

  if (badge) {
    const Badge = badge;
    return (
      <Badge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        {avatar}
      </Badge>
    );
  }

  return avatar;
}

AvatarComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'extra-small',
    'small',
    'medium',
    'large',
    'extra-large',
  ]),
  badge: PropTypes.elementType,
};
