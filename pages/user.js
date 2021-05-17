import BasePage from '../components/base';
import UserHeadline from '../components/user-headline';
import { simplifyNumber } from '../utils';
import FeedContainerTwo from '../components/user-feed';

import React from 'react';

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

  return (
    <BasePage>
      <UserHeadline user={user} backgroundImage="/background/bananas.png" />
      <FeedContainerTwo user={user} />
    </BasePage>
  );
}
