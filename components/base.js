import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import useSWR from 'swr';
import axios from 'axios';

import Layout from '../components/layout';
import Avatar from '../components/avatar';
import ProfileActionList from './profile/profile-action-list';
import SuggestionList from './suggestion/suggestion-list';
import Footer from './footer';
import BaseError from './error';
import Loading from './loading';

const useStyles = makeStyles(theme => ({
  center: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Base({ children }) {
  const classes = useStyles();

  const fetcher = url => axios.get(url).then(res => res.data);
  const { data: user, error: userError } = useSWR(`/api/user`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  const { data: suggestions, error: suggError } = useSWR(
    '/api/suggestions',
    fetcher
  );

  const LeftSide = user => (
    <Box>
      <Box style={{ padding: '1em' }}>
        <Avatar src={user.avatar} alt="Avatar" size="large" />
      </Box>
      <ProfileActionList badgeContent={user.activity} />
      <Footer />
    </Box>
  );

  if (userError || suggError)
    return (
      <Box className={classes.center}>
        <BaseError message="Oops! Try again later." />
      </Box>
    );

  if (!user && !userError)
    return (
      <Box className={classes.center}>
        <Loading size={120} style={{ alignItems: 'center' }} />
      </Box>
    );

  if (user && !suggestions && !suggError)
    return (
      <Layout>
        {LeftSide(user)}
        <Box>{children}</Box>
        <Box>
          <Loading size={60} />
        </Box>
      </Layout>
    );

  return (
    <Layout>
      {LeftSide(user)}
      <Box>{children}</Box>
      <Box>
        <SuggestionList content={suggestions} />
      </Box>
    </Layout>
  );
}
