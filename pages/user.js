import React from 'react';

import useSWR from 'swr';

import BasePage from '../components/base';
import UserHeadline from '../components/user-headline';
import { simplifyNumber } from '../utils';
import UserFeed from '../components/user-feed-container';
import Loading from '../components/loading';

export default function Post() {
  const user = {
    avatar: '/avatar.png',
    name: 'My Test Name',
    slug: 'testingSlug',
    postCount: simplifyNumber(Math.floor(Math.random() * 500)),
    likesCount: simplifyNumber(Math.floor(Math.random() * 5000)),
    followers: simplifyNumber(Math.floor(Math.random() * 300)),
    following: simplifyNumber(Math.floor(Math.random() * 300)),
  };

  // const fetcher = (...args) => fetch(...args).then(res => res.json());

  // const { data, error } = useSWR('/api/user/123', fetcher);

  return (
    <BasePage>
      <Loading size={40} />
    </BasePage>
  );

  return (
    <BasePage>
      <UserHeadline user={user} backgroundImage="/background/bananas.png" />
      <UserFeed user={user} />
    </BasePage>
  );
}
