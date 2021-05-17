import BasePage from '../../components/base';
import GoBack from '../../components/go-back';
import ViewHistory from '../../components/settings/view-history';

import React from 'react';

export default function History() {
  return (
    <BasePage>
      <GoBack />
      <ViewHistory />
    </BasePage>
  );
}
