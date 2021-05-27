import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  BaseInput,
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

const EmojisOptionButtonMemoized = React.memo(EmojisOptionButton);
const ClearOptionButtonMemoized = React.memo(ClearOptionButton);

export default function CommentForm({ callback }) {
  const classes = useStyles();

  const inputRef = React.useRef(null);
  const [body, dispatch] = React.useReducer((state, payload) => {
    switch (payload.action) {
      case 'add':
        return state + payload.value;
      case 'set':
        return payload.value;
    }
  }, '');
  const handleInputChange = ev => {
    dispatch({ action: 'set', value: ev.target.value });
  };

  return (
    <BaseForm callback={() => callback(getText())} className={classes.root}>
      {/* input base */}
      <BaseInput
        inputRef={inputRef}
        body={body}
        handleInputChange={handleInputChange}
      />

      {/* actions */}

      {/* Insert Emoji Button */}
      <EmojisOptionButtonMemoized dispatch={dispatch} inputRef={inputRef} />

      {/* Clear All Button */}
      <ClearOptionButtonMemoized
        dispatch={dispatch}
        setMedia={setLoadedMedia}
      />
    </BaseForm>
  );
}

CommentForm.propTypes = {
  callback: PropTypes.func.isRequired,
};
