import useSWR from 'swr';
import axios from 'axios';

import Feed from '../components/feed/feed-container';
import PostForm from '../components/post/post-form';
import BasePage from '../components/base';
import BaseError from '../components/error';
import Loading from '../components/loading';

export default function Home() {
  const fetcher = url => axios.get(url).then(res => res.data);
  // const { data: feed, error } = useSWR(`/api/feed`, fetcher);

  return <PostForm callback={() => {}} />;

  if (error)
    return (
      <BasePage>
        <BaseError
          title="Oops!"
          message="Couldn't process request. Try again later."
        />
      </BasePage>
    );

  if (!feed)
    return (
      <BasePage>
        <PostForm callback={() => {}} />
        <Loading size={70} />
      </BasePage>
    );

  return (
    <BasePage>
      <PostForm callback={() => {}} />
      <Feed content={feed} />
    </BasePage>
  );
}
