import React from 'react';
import PropTypes from 'prop-types';

import EditIcon from '@material-ui/icons/Edit';
import SettingsIcon from '@material-ui/icons/Settings';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import HistoryIcon from '@material-ui/icons/History';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import StarIcon from '@material-ui/icons/Star';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { Box } from '@material-ui/core';

import ProfileAction from './profile-action';

export default function ProfileActionList({ badgeContent, ...rest }) {
  console.log('badgeContent:');
  console.log(badgeContent);

  return (
    <Box {...rest}>
      <ProfileAction to="/settings/profile" icon={<EditIcon />}>
        Edit Profile
      </ProfileAction>
      <ProfileAction to="/settings/privacy" icon={<VisibilityOffIcon />}>
        Edit Privacy Settings
      </ProfileAction>
      <ProfileAction to="/settings/account" icon={<SettingsIcon />}>
        Edit Account Settings
      </ProfileAction>
      <ProfileAction to="/settings/history" icon={<HistoryIcon />}>
        View History
      </ProfileAction>
      <ProfileAction
        to="/settings/activity"
        icon={<StarIcon />}
        badgeContent={badgeContent}
      >
        View Activity
      </ProfileAction>
      <ProfileAction to="/settings/page" icon={<MenuBookIcon />}>
        Manage Page
      </ProfileAction>
      <ProfileAction to="#" icon={<ExitToAppIcon />}>
        Logout
      </ProfileAction>
    </Box>
  );
}

ProfileActionList.propTypes = {
  badgeContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
