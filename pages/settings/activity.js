import React from 'react';

import useSWR from 'swr';
import axios from 'axios';

import BasePage from '../../components/base';
import GoBack from '../../components/go-back';
import ViewActivity from '../../components/settings/view-activity';
import Loading from '../../components/loading';
import BaseError from '../../components/error';

export default function ActivitySettings() {
  const fetcher = (...args) => axios.get(...args).then(res => res.data);
  const { data: activity, error } = useSWR(`/api/settings/activity`, fetcher);

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

  if (!activity)
    return (
      <BasePage>
        <GoBack />
        <Loading size={70} />
      </BasePage>
    );

  return (
    <BasePage>
      <GoBack />
      <ViewActivity content={activity} />
    </BasePage>
  );
}
