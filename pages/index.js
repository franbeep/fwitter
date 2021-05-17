import FeedContainer from '../components/feed/feed-container';
import PostForm from '../components/post/post-form';
import BasePage from '../components/base';

export default function Home() {
  return (
    <BasePage>
      <PostForm />
      <FeedContainer />
    </BasePage>
  );
}
