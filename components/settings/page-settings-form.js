import React from 'react';
import PropTypes from 'prop-types';

import { Typography, Switch, FormControlLabel } from '@material-ui/core';

import Base from './base';

export default function PageSettingsForm({ updateSettingsCallback }) {
  const [state, setState] = React.useState({
    showLeftProfile: true,
    showRelevantContent: true,
    showAdditionalTrends: true,
    showPosts: true,
    showReplies: true,
    showLikes: true,
  });

  const handleChange = event => {
    const newState = { ...state, [event.target.name]: event.target.checked };
    setState(newState);
    updateSettingsCallback(newState);
  };

  return (
    <Base title="Page Settings">
      <Base item xs={12}>
        <Typography variant="h6">General</Typography>
      </Base>
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showLeftProfile}
              onChange={handleChange}
              name="showLeftProfile"
            />
          }
          label={
            <Typography variant={'body2'}>
              Show profile on the left side
            </Typography>
          }
        />
      </Base>
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showRelevantContent}
              onChange={handleChange}
              name="showRelevantContent"
            />
          }
          label={
            <Typography variant={'body2'}>Show relevant content</Typography>
          }
        />
      </Base>
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showAdditionalTrends}
              onChange={handleChange}
              name="showAdditionalTrends"
            />
          }
          label={
            <Typography variant={'body2'}>
              Show additional trending content
            </Typography>
          }
        />
      </Base>
      <Base item xs={12}>
        <Typography variant="h6">Activity</Typography>
      </Base>
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showPosts}
              onChange={handleChange}
              name="showPosts"
            />
          }
          label={<Typography variant={'body2'}>Show posts</Typography>}
        />
      </Base>
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showReplies}
              onChange={handleChange}
              name="showReplies"
            />
          }
          label={<Typography variant={'body2'}>Show replies</Typography>}
        />
      </Base>
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.showLikes}
              onChange={handleChange}
              name="showLikes"
            />
          }
          label={<Typography variant={'body2'}>Show likes</Typography>}
        />
      </Base>
    </Base>
  );
}

PageSettingsForm.propTypes = {
  updateSettingsCallback: PropTypes.func.isRequired,
};
