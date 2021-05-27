import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import BaseError from '../components/error';

const useStyles = makeStyles(theme => ({
  center: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export default function Error404() {
  const classes = useStyles();

  return (
    <Box className={classes.center}>
      <BaseError title="404" message="Page not found!" />
    </Box>
  );
}
