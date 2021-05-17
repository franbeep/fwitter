import BasePage from '../../components/base';
import GoBack from '../../components/go-back';
import PageSettingsForm from '../../components/settings/page-settings-form';

import React from 'react';

export default function PageSettings() {
  return (
    <BasePage>
      <GoBack />
      <PageSettingsForm />
    </BasePage>
  );
}
