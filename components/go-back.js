import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { Button } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

export default function GoBack({ callback, ...rest }) {
  const router = useRouter();

  const handle = () => {
    if (callback) callback();
    router.push('/');
  };

  return (
    <Button startIcon={<KeyboardBackspaceIcon />} onClick={handle} {...rest}>
      Main Page
    </Button>
  );
}

GoBack.propTypes = {
  callback: PropTypes.func,
};
