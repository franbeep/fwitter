import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Badge, Box } from '@material-ui/core';

const CustomBadge = withStyles(theme => ({
  badge: {
    right: -8,
    padding: '0 4px',
  },
}))(Badge);

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ProfileAction({
  to,
  icon,
  callback,
  children,
  badgeContent = null,
}) {
  const classes = useStyles();

  const wrapper = content => (
    <Link href={to}>
      <Button
        startIcon={icon}
        className={classes.button}
        onClick={callback}
        size="large"
      >
        {content}
      </Button>
    </Link>
  );

  if (badgeContent)
    return wrapper(
      <CustomBadge badgeContent={badgeContent} color="secondary">
        {children}
      </CustomBadge>
    );

  return wrapper(children);
}

ProfileAction.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  callback: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired,
  badgeContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
