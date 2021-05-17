import BasePage from '../../components/base';
import GoBack from '../../components/go-back';
import ViewActivity from '../../components/settings/view-activity';

import React from 'react';

export default function ActivitySettings() {
  return (
    <BasePage>
      <GoBack />
      <ViewActivity />
    </BasePage>
  );
}
