import BasePage from '../../components/base';
import GoBack from '../../components/go-back';
import PrivacySettingsForm from '../../components/settings/privacy-settings-form';

import React from 'react';

export default function PrivacySettings() {
  return (
    <BasePage>
      <GoBack />
      <PrivacySettingsForm />
    </BasePage>
  );
}
