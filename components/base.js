import React from 'react';

import { Box } from '@material-ui/core';

import Layout from '../components/layout';
import Avatar from '../components/avatar';
import ProfileActionList from './profile/profile-action-list';
import SuggestionList from './suggestion/suggestion-list';
import Footer from './footer';

export default function Base({ children }) {
  return (
    <Layout>
      <Box component="nav">
        <Box style={{ padding: '1em' }}>
          <Avatar src="/avatar.png" alt="Avatar" size="large" />
        </Box>
        <ProfileActionList />
        <Footer />
      </Box>
      <Box component="main">{children}</Box>
      <Box>
        <SuggestionList />
        {/* <Advertisement /> */}
      </Box>
    </Layout>
  );
}
