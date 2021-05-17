import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Button, Badge } from '@material-ui/core';

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
  children,
  badgeContent = null,
}) {
  const classes = useStyles();
  const Icon = icon;

  const wrapper = content => (
    <Link href={to}>
      <Button startIcon={<Icon />} className={classes.button} size="large">
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
  icon: PropTypes.elementType.isRequired,
  badgeContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any.isRequired,
};
