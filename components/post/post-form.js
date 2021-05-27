import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  IconButton,
  Button,
  InputBase,
  FormHelperText,
  Menu,
  Box,
  CircularProgress,
} from '@material-ui/core';
import {
  ClearAll as ClearAllIcon,
  Image as ImageIcon,
  InsertEmoticon as InsertEmoticonIcon,
} from '@material-ui/icons';
import _ from 'lodash';
import { useInView } from 'react-intersection-observer';
import { useDropzone } from 'react-dropzone';

import { EMOJIS } from '../../data/emoji';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  textfield: {
    // margin: '1em',
    width: '100%',
    marginBottom: '0em',
  },
  input: {
    // width: '100%',
    marginBottom: '0em',
  },
  dragTo: {
    width: '5em',
    height: '5em',
    borderColor: theme.palette.grey[300],
    backgroundColor: theme.palette.grey[100],
    border: '2px dashed',
  },
  imageOverlay: {
    'position': 'absolute' /* Sit on top of the page content */,
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
    'backgroundColor': 'rgba(0,0,0,0.3)' /* Black background with opacity */,
    'display': 'flex',
    'alignItems': 'end',
    '& button': {
      width: '100% !important',
      display: 'none',
    },
    '&:hover': {
      '& button': {
        display: 'block',
      },
    },
  },
  media: {
    'position': 'relative',
    'height': '5em',
    'width': '5em',

    '& div': {
      borderRadius: theme.spacing(1),
    },
  },
  emojisContainer: {
    padding: '0.5em',
    maxWidth: '200px',
    maxHeight: '100px',
    overflow: 'auto',
  },
  emojisListItem: {
    color: 'rgba(0,0,0,1)',
  },
}));

const MAX_COUNT = 140;

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

function EmojisContainer({ handleAddEmoji, classes, spacing = 2 }) {
  const [amount, setAmount] = React.useState(100);

  const EmojisList = ({ amount, spacing }) =>
    _.take(EMOJIS, amount).map(emoji => (
      <Grid item xs={spacing} key={emoji} component="li">
        <IconButton
          size="small"
          onClick={() => {
            handleAddEmoji(emoji);
          }}
          className={classes.emojisListItem}
        >
          {emoji}
        </IconButton>
      </Grid>
    ));
  const LoadMore = ({ handleInView }) => {
    const { ref, inView, entry } = useInView({
      threshold: 0,
    });

    React.useEffect(() => {
      if (inView) handleInView();
    }, [inView]);

    return (
      <Grid item xs={12} ref={ref} style={{ textAlign: 'center' }}>
        <CircularProgress size={15} color="secondary" />
      </Grid>
    );
  };
  const LoadMoreMemoized = React.memo(LoadMore);

  return (
    <Grid container component="ul" className={classes.emojisContainer}>
      <EmojisList amount={amount} spacing={spacing} />
      <LoadMoreMemoized
        handleInView={React.useCallback(() => {
          setAmount(amount + 100);
        })}
      />
    </Grid>
  );
}
const EmojisContainerMemoized = React.memo(EmojisContainer);

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

export default function PostForm({ callback }) {
  // const [body, setBody] = React.useState('');
  const [body, dispatchBody] = React.useReducer((state, payload) => {
    switch (payload.action) {
      case 'add':
        return state + payload.value;
      case 'set':
        return payload.value;
    }
  }, '');
  const [anchor, setAnchor] = React.useState(null);
  const [loadedMedia, setLoadedMedia] = React.useState(null);
  const [file, setFile] = React.useState(null); // !Review this; perhaps no need to have it with loadedMedia
  const inputRef = React.useRef(null);
  const onDrop = React.useCallback(acceptedFiles => {
    // Do something with the files
    console.log('dropped!!');
    const file = acceptedFiles[0];

    const reader = new FileReader();

    reader.onload = event => {
      setLoadedMedia(event.target.result);
    };
    reader.readAsDataURL(file);

    setFile(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
  });

  const classes = useStyles();

  const handleSubmit = ev => {
    // send data here
  };

  const handleInputChange = ev => {
    dispatchBody({ action: 'set', value: ev.target.value });
  };

  // open menu
  const handleClick = event => {
    setAnchor(event.currentTarget);
  };

  // close menu
  const handleClose = () => {
    setAnchor(null);
  };

  // add emoji to text
  const handleAddEmoji = React.useCallback(emoji => {
    handleClose();
    setTimeout(() => {
      inputRef.current.focus();
    }, 100);
    dispatchBody({ action: 'add', value: ` ${emoji}` });
  }, []);

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          {/* input base */}
          <div {...getRootProps()} onClick={undefined}>
            <InputBase
              className={classes.input}
              placeholder="What's going on?"
              fullWidth
              multiline
              aria-describedby="body-text"
              inputProps={{ maxLength: MAX_COUNT }}
              inputRef={inputRef}
              value={body}
              autoFocus
              onChange={handleInputChange}
            />
            <FormHelperText id="count-text" style={{ float: 'right' }}>
              {body.length}/{MAX_COUNT}
            </FormHelperText>
            {/* drag input */}
            <input {...getInputProps()} onClick={undefined} />
            {isDragActive && <div className={classes.dragTo}></div>}
            {loadedMedia && (
              <Box className={classes.media}>
                <Image
                  src={loadedMedia}
                  alt="Post Media"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
                <div className={classes.imageOverlay}>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    disableElevation
                    style={{ width: '50%' }}
                    onClick={() => setLoadedMedia(null)}
                  >
                    clear
                  </Button>
                </div>
              </Box>
            )}
          </div>
          <div>
            {/* Image Button */}
            <IconButton
              aria-label="insert image"
              onClick={() => {
                const { ref } = getInputProps();
                ref.current.click();
              }}
            >
              <ImageIcon />
            </IconButton>

            {/* Insert Emoji Button */}
            <IconButton
              aria-controls="insert-emoji-menu"
              aria-haspopup="true"
              aria-label="insert emoji"
              onClick={handleClick}
            >
              <InsertEmoticonIcon />
            </IconButton>
            <Menu
              id="insert-emoji-menu"
              anchorEl={anchor}
              keepMounted
              open={Boolean(anchor)}
              onClose={handleClose}
              component="div"
            >
              {/* hacks! don't remove this */}
              <span style={{ display: 'none' }}></span>
              <EmojisContainerMemoized handleAddEmoji={handleAddEmoji} />
            </Menu>

            {/* Clear All Button */}
            <IconButton
              aria-label="clear all"
              onClick={() => {
                dispatchBody({ action: 'set', value: '' });
                setLoadedMedia(null);
              }}
            >
              <ClearAllIcon />
            </IconButton>

            {/* Send */}
            <Button onClick={handleSubmit}>Send</Button>
          </div>
        </form>
      </Grid>
    </Grid>
  );
}

PostForm.propTypes = {
  callback: PropTypes.func.isRequired,
};

// TODO: Opt => when menu closed, return number of emojis to 100; also reduce number of emojis
