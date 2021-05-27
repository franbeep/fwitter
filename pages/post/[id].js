import React from 'react';
import { useRouter } from 'next/router';

import useSWR from 'swr';
import axios from 'axios';

import BasePage from '../../components/base';
import GoBack from '../../components/go-back';
import Post from '../../components/post/post';
import CommentsContainer from '../../components/comment/comment-container';
import CommentForm from '../../components/comment/comment-form';
import Loading from '../../components/loading';
import BaseError from '../../components/error';

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const params = React.useMemo(() => ({ id }), [id]);

  const fetcher = (...args) => axios.get(...args).then(res => res.data);
  const { data: post, error: postError } = useSWR(
    [`/api/post`, params],
    fetcher
  );
  const { data: comments, error: commentsError } = useSWR(
    [`/api/comments`, params],
    fetcher
  );

  if (postError || commentsError)
    return (
      <BasePage>
        <GoBack />
        <BaseError message="Couldn't process request. Try again later." />
      </BasePage>
    );

  if (!post)
    return (
      <BasePage>
        <GoBack />
        <Loading size={70} />
      </BasePage>
    );

  if (!comments)
    return (
      <BasePage>
        <GoBack />
        <Post content={post} />
        <Loading size={40} />
      </BasePage>
    );

  return (
    <BasePage>
      <GoBack />
      <Post content={post} />
      <CommentForm />
      <CommentsContainer content={comments} />
    </BasePage>
  );
}
