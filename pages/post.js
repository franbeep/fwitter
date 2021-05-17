import BasePage from '../components/base';
import GoBack from '../components/go-back';
import Post from '../components/post/post';
import CommentsContainer from '../components/comment/comment-container';
import CommentForm from '../components/comment/comment-form';

import React from 'react';

export default function PostPage() {
  return (
    <BasePage>
      <GoBack />
      <Post />
      <CommentForm />
      <CommentsContainer />
    </BasePage>
  );
}
