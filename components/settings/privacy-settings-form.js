import React from 'react';

import { Typography, Switch, FormControlLabel } from '@material-ui/core';

import Base from './base';

export default function PrivacySettingsForm({ updateSettingsCallback }) {
  const [state, setState] = React.useState({
    showPosts: true,
    showLikes: true,
    showFollowers: true,
    showFollowing: true,
    showOnRelevantContent: true,
    showOnPeoplesFeed: true,
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
              checked={state.showPosts}
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
              checked={state.showLikes}
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
              checked={state.showFollowers}
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
              checked={state.showFollowing}
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
