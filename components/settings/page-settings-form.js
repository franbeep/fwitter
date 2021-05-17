import React from 'react';

import { Grid, Typography, Switch, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
}));

export default function PageSettingsForm() {
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
        <Typography variant="h5">Page Settings</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">General</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
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
            <Typography variant={'body2'}>
              Show profile on the left side
            </Typography>
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
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
            <Typography variant={'body2'}>Show relevant content</Typography>
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
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
            <Typography variant={'body2'}>
              Show additional trending content
            </Typography>
          }
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6">Activity</Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label={<Typography variant={'body2'}>Show posts</Typography>}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label={<Typography variant={'body2'}>Show replies</Typography>}
        />
      </Grid>

      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.checkedA}
              onChange={handleChange}
              name="checkedA"
            />
          }
          label={<Typography variant={'body2'}>Show likes</Typography>}
        />
      </Grid>
    </Grid>
  );
}
