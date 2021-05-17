import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  root: {
    'margin': '0',
    'padding': '0.5em',
    // 'padding': theme.spacing(2),
    '& a': {
      'color': 'inherit',
      'textDecoration': 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
    '&:hover': {
      backgroundColor: theme.palette.grey[400],
    },
  },
  suggestion: {
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    'position': 'relative',
    'height': '100%',
    'maxWidth': '5em',
    '& div': {
      borderRadius: theme.spacing(1),
    },
  },
  slug: {
    opacity: 0.7,
  },
}));

export default function Suggestion({
  image,
  slug,
  category,
  title,
  onFire,
  numberOfFollowers,
  className,
}) {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={clsx(classes.root, className)}>
      <Grid item xs={8}>
        <Box className={classes.suggestion}>
          <Typography variant="body1">
            {title} • {category}
          </Typography>
          <Typography variant="caption" className={classes.slug} paragraph>
            <Link href="#">{`@${slug}`}</Link>
            {onFire ? ' • On Fire 🔥' : ''}
          </Typography>
          <Typography variant="caption">
            {numberOfFollowers} Following
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Box className={classes.media}>
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            quality={50}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

Suggestion.propTypes = {
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onFire: PropTypes.bool.isRequired,
  numberOfFollowers: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};
