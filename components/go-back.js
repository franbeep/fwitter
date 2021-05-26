import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export default function GoBack({ callback }) {
  return (
    <Link href="/">
      <Button startIcon={<KeyboardBackspaceIcon />} onClick={callback}>
        Back
      </Button>
    </Link>
  );
}

GoBack.propTypes = {
  callback: PropTypes.func.isRequired,
};
