import React from 'react';

import {
  Button,
  Grid,
  Typography,
  Switch,
  FormControlLabel,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
}));

export default function PrivacySettingsForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = event => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h5">Privacy Settings</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label={
            <Typography variant={'body2'}>Show posts statistics</Typography>
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label={
            <Typography variant={'body2'}>Show likes statistics</Typography>
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label={
            <Typography variant={'body2'}>Show followers statistics</Typography>
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label={
            <Typography variant={'body2'}>Show following statistics</Typography>
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label={
            <Typography variant={'body2'}>Show on relevant content</Typography>
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Fruitful for two image together open Whose whales our, may bearing
          creeping isn't waters she'd in rule under which itself fish beast.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label={
            <Typography variant={'body2'}>Show on people's feed</Typography>
          }
        />
      </Grid>
    </Grid>
  );
}
