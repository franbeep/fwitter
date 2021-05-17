import React from 'react';
import PropTypes from 'prop-types';

import {
  EditIcon,
  SettingsIcon,
  VisibilityOffIcon,
  HistoryIcon,
  MenuBookIcon,
  ExitToAppIcon,
  StarIcon,
} from '@material-ui/icons';
import { Box } from '@material-ui/core';

import ProfileAction from './profile-action';

export default function ProfileActionList({ ...rest }) {
  return (
    <Box {...rest}>
      <ProfileAction to="#" icon={EditIcon}>
        Edit Profile
      </ProfileAction>
      <ProfileAction to="#" icon={VisibilityOffIcon}>
        Edit Privacy Settings
      </ProfileAction>
      <ProfileAction to="#" icon={SettingsIcon}>
        Edit Account Settings
      </ProfileAction>
      <ProfileAction to="#" icon={HistoryIcon}>
        View History
      </ProfileAction>
      <ProfileAction to="#" icon={StarIcon} badgeContent={27}>
        View Activity
      </ProfileAction>
      <ProfileAction to="#" icon={MenuBookIcon}>
        Manage Page
      </ProfileAction>
      <ProfileAction to="#" icon={ExitToAppIcon}>
        Logout
      </ProfileAction>
    </Box>
  );
}
