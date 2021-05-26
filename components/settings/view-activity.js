import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Typography, List, ListItem, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import Base from './base';

const useStyles = makeStyles(theme => ({
  activity: {
    '& li:nth-child(2n)': {
      background: theme.palette.grey[200],
    },
  },
  slug: {
    opacity: 0.7,
  },
}));

export default function ViewActivity({ content }) {
  const classes = useStyles();

  return (
    <Base title="Activity Settings">
      <Base item xs={1}>
        <Divider orientation="vertical" style={{ width: '8px' }} />
      </Base>
      <Base item xs={11}>
        <List className={classes.activity}>
          {content.map((index, item) => (
            <ListItem index={index}>
              <Typography variant="subtitle1">
                <Typography component="span" className={classes.slug}>
                  <Link href="#">{`@${item.slug}`}</Link>
                </Typography>{' '}
                commented on your{' '}
                <Typography component="span" color="secondary">
                  <Link href={`/${item.link}`}>post</Link>
                </Typography>{' '}
                {moment(item.date).fromNow()}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Base>
    </Base>
  );
}

ViewActivity.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })
  ),
};
