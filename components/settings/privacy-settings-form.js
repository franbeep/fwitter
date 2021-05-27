import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Switch, FormControlLabel } from '@material-ui/core';

import Base from './base';

export default function PrivacySettingsForm({
  initialData,
  updateSettingsCallback,
}) {
  const [state, setState] = React.useState({
    showMyPosts: initialData.showMyPosts,
    showMyLikes: initialData.showMyLikes,
    showMyFollowers: initialData.showMyFollowers,
    showMyFollowing: initialData.showMyFollowing,
    showOnRelevantContent: initialData.showOnRelevantContent,
    showOnPeoplesFeed: initialData.showOnPeoplesFeed,
  });

  const handleChange = event => {
    const newState = { ...state, [event.target.name]: event.target.checked };
    setState(newState);
    updateSettingsCallback(newState);
  };

  return (
    <Base title="Privacy Settings">
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showMyPosts}
              onChange={handleChange}
              name="showPosts"
            />
          }
          label={
            <Typography variant={'body2'}>Show posts statistics</Typography>
          }
        />
      </Base>
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showMyLikes}
              onChange={handleChange}
              name="showLikes"
            />
          }
          label={
            <Typography variant={'body2'}>Show likes statistics</Typography>
          }
        />
      </Base>
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showMyFollowers}
              onChange={handleChange}
              name="showFollowers"
            />
          }
          label={
            <Typography variant={'body2'}>Show followers statistics</Typography>
          }
        />
      </Base>
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showMyFollowing}
              onChange={handleChange}
              name="showFollowing"
            />
          }
          label={
            <Typography variant={'body2'}>Show following statistics</Typography>
          }
        />
      </Base>
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showOnRelevantContent}
              onChange={handleChange}
              name="showOnRelevantContent"
            />
          }
          label={
            <Typography variant={'body2'}>Show on relevant content</Typography>
          }
        />
      </Base>
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showOnPeoplesFeed}
              onChange={handleChange}
              name="showOnPeoplesFeed"
            />
          }
          label={
            <Typography variant={'body2'}>Show on people's feed</Typography>
          }
        />
      </Base>
    </Base>
  );
}

PrivacySettingsForm.propTypes = {
  initialData: PropTypes.shape({
    showMyPosts: PropTypes.bool.isRequired,
    showMyLikes: PropTypes.bool.isRequired,
    showMyFollowers: PropTypes.bool.isRequired,
    showMyFollowing: PropTypes.bool.isRequired,
    showOnRelevantContent: PropTypes.bool.isRequired,
    showOnPeoplesFeed: PropTypes.bool.isRequired,
  }),
  updateSettingsCallback: PropTypes.func.isRequired,
};
