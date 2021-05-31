import React from 'react';

import useSWR from 'swr';
import axios from 'axios';

import BasePage from '../../components/base';
import GoBack from '../../components/go-back';
import ViewHistory from '../../components/settings/view-history';
import Loading from '../../components/loading';
import BaseError from '../../components/error';

export default function History() {
  const fetcher = (...args) => axios.get(...args).then(res => res.data);
  const { data: history, error } = useSWR(`/api/settings/history`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error)
    return (
      <BasePage>
        <GoBack />
        <BaseError
          title="Oops!"
          message="Couldn't process request. Try again later."
        />
      </BasePage>
    );

  if (!history)
    return (
      <BasePage>
        <GoBack />
        <Loading size={70} />
      </BasePage>
    );

  return (
    <BasePage>
      <GoBack />
      <ViewHistory content={[]} />
    </BasePage>
  );
}
