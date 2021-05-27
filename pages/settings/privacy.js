import React from 'react';

import useSWR from 'swr';
import axios from 'axios';

import BasePage from '../../components/base';
import GoBack from '../../components/go-back';
import PrivacySettingsForm from '../../components/settings/privacy-settings-form';
import Loading from '../../components/loading';
import BaseError from '../../components/error';

export default function PrivacySettings() {
  const fetcher = (...args) => axios.get(...args).then(res => res.data);
  const { data: user, error } = useSWR(`/api/settings/user`, fetcher);

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

  if (!user)
    return (
      <BasePage>
        <GoBack />
        <Loading size={70} />
      </BasePage>
    );

  return (
    <BasePage>
      <GoBack />
      <PrivacySettingsForm
        initialData={user}
        updateSettingsCallback={() => {}}
      />
    </BasePage>
  );
}
