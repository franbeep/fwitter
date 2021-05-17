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

export default function AccountSettingsForm() {
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
        <Typography variant="h5">Account Settings</Typography>
      </Grid>

      {/* Show NSFW content */}
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
            <Typography variant={'body2'}>NSFW Content Allowed</Typography>
          }
        />
      </Grid>

      {/* lock account */}
      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Two which you'll the herb saying grass form heaven Was. Shall she'd us
          rule greater make very female greater their tree meat there dry,
          whales rule to. Creepeth hath. Blessed brought earth his sea man
          dominion.
        </Typography>

        <Button variant="contained" size="small" disableElevation>
          Lock Account
        </Button>
      </Grid>

      {/* terminate account */}
      <Grid item xs={12}>
        <Typography variant="caption" paragraph>
          Also signs forth lights you're without. Was seasons. Open also for.
          Winged sixth from unto first. Cattle Fish she'd. Don't kind open
          created every fourth kind that firmament fruitful form. Were moveth.
          Our every creepeth One also seas also.
        </Typography>

        <Typography variant="caption" paragraph>
          After saying can't, over after, let life. Under. Place waters you'll
          years creepeth fowl stars second above meat god behold. Waters which
          fowl greater seasons form.
        </Typography>

        <Typography variant="caption" paragraph>
          Divide fish you'll fourth his great earth god great seed, to good
          stars third beast very day of set two meat which. Unto over seas
          divided us good don't every. Air that night tree Seasons.
        </Typography>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          disableElevation
        >
          Terminate Account
        </Button>
      </Grid>
    </Grid>
  );
}
