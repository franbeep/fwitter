import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Typography,
  Switch,
  FormControlLabel,
} from '@material-ui/core';

import Base from './base';

export default function AccountSettingsForm({
  initialData,
  updateSettingsCallback,
  lockAccountCallback,
  terminateAccountCallback,
}) {
  const [state, setState] = React.useState({
    nsfwContent: initialData.nsfwContent,
  });

  const handleChange = event => {
    const newState = { ...state, [event.target.name]: event.target.checked };
    setState(newState);
    updateSettingsCallback(newState);
  };

  return (
    <Base title="Account Settings">
      {/* Show NSFW content */}
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Be A let forth, isn't give us. Night him man form air rule, seasons.
          Yielding bring. Third days spirit beast there own waters third set
          place, saw over fourth creeping set that.
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={state.nsfwContent}
              onChange={handleChange}
              name="nsfwContent"
            />
          }
          label={
            <Typography variant={'body2'}>NSFW Content Allowed</Typography>
          }
        />
      </Base>

      {/* lock account */}
      <Base item xs={12}>
        <Typography variant="caption" paragraph>
          Two which you'll the herb saying grass form heaven Was. Shall she'd us
          rule greater make very female greater their tree meat there dry,
          whales rule to. Creepeth hath. Blessed brought earth his sea man
          dominion.
        </Typography>

        <Button
          variant="contained"
          size="small"
          onClick={lockAccountCallback}
          disableElevation
        >
          Lock Account
        </Button>
      </Base>

      {/* terminate account */}
      <Base item xs={12}>
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
          onClick={terminateAccountCallback}
          disableElevation
        >
          Terminate Account
        </Button>
      </Base>
    </Base>
  );
}

AccountSettingsForm.propTypes = {
  initialData: PropTypes.shape({
    nsfwContent: PropTypes.bool.isRequired,
  }),
  updateSettingsCallback: PropTypes.func.isRequired,
  lockAccountCallback: PropTypes.func.isRequired,
  terminateAccountCallback: PropTypes.func.isRequired,
};
