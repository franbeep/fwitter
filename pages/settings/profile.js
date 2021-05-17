import BasePage from '../../components/base';
import GoBack from '../../components/go-back';
import ProfileSettingsForm from '../../components/settings/profile-settings-form';

import React from 'react';

export default function ProfileSettings() {
  return (
    <BasePage>
      <GoBack />
      <ProfileSettingsForm />
    </BasePage>
  );
}
