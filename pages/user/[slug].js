import React from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import axios from 'axios';

import BasePage from '../../components/base';
import UserHeadline from '../../components/user/user-headline';
import UserFeed from '../../components/user/user-feed-container';
import Loading from '../../components/loading';
import BaseError from '../../components/error';
import GoBack from '../../components/go-back';

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const params = React.useMemo(() => ({ slug }), [slug]);

  const fetcher = (...args) => axios.get(...args).then(res => res.data);
  const { data: user, error: userError } = useSWR(
    [`/api/user`, params],
    fetcher
  );
  const { data: feed, error: feedError } = useSWR(`/api/feed`, fetcher);

  if (userError || feedError) {
    return (
      <BasePage>
        <BaseError message="Couldn't process request. Try again later." />
      </BasePage>
    );
  }

  if (!user)
    return (
      <BasePage>
        <Loading size={70} />
      </BasePage>
    );

  if (!feed)
    return (
      <BasePage>
        <UserHeadline user={user} backgroundImage="/background/bananas.png" />
        <Loading size={40} />
      </BasePage>
    );

  return (
    <BasePage>
      <GoBack
        variant="contained"
        disableElevation
        style={{
          position: 'absolute',
          zIndex: '100',
          backgroundColor: '#fafafa',
        }}
      />
      <UserHeadline user={user} backgroundImage="/background/bananas.png" />
      <UserFeed content={feed} />
    </BasePage>
  );
}
