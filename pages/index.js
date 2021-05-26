import useSWR from 'swr';
import axios from 'axios';

import Feed from '../components/feed/feed-container';
import PostForm from '../components/post/post-form';
import BasePage from '../components/base';
import BaseError from '../components/error';
import Loading from '../components/loading';

export default function Home() {
  const fetcher = url => axios.get(url).then(res => res.data);
  const { data: feed, error } = useSWR(`/api/feed`, fetcher);

  const wrapper = content => (
    <BasePage>
      <PostForm />
      {content}
    </BasePage>
  );

  if (error)
    return wrapper(
      <BaseError message="Couldn't process request. Try again later." />
    ); // error
  if (!feed) return wrapper(<Loading size={70} />); // loading
  return wrapper(<Feed content={feed} />); // result
}
