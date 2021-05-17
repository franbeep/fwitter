import PropTypes from 'prop-types';
import React from 'react';

import { Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export default function GoBack({ callback }) {
  return (
    <Button startIcon={<KeyboardBackspaceIcon />} onClick={callback}>
      Back
    </Button>
  );
}

GoBack.propTypes = {
  callback: PropTypes.func.isRequired,
};
