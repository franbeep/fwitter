import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  generateBaseInput,
  EmojisOptionButton,
  ClearOptionButton,
  BaseForm,
} from '../post/post-form';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.spacing(1),
  },
}));

export default function CommentForm({ callback }) {
  const classes = useStyles();

  const {
    getText,
    dispatch,
    ref: inputRef,
    component: BaseInput,
  } = generateBaseInput();

  return (
    <BaseForm callback={() => callback(getText())} className={classes.root}>
      {/* input base */}
      <BaseInput />

      {/* actions */}

      {/* Insert Emoji Button */}
      <EmojisOptionButton dispatch={dispatch} inputRef={inputRef} />

      {/* Clear All Button */}
      <ClearOptionButton dispatch={dispatch} setMedia={setLoadedMedia} />
    </BaseForm>
  );
}

CommentForm.propTypes = {
  callback: PropTypes.func.isRequired,
};
