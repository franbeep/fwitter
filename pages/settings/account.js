import BasePage from '../../components/base';
import GoBack from '../../components/go-back';
import AccountSettingsForm from '../../components/settings/account-settings-form';

export default function AccountSettings() {
  return (
    <BasePage>
      <GoBack />
      <AccountSettingsForm />
    </BasePage>
  );
}
