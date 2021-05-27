import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Box,
  Divider,
  IconButton,
  Badge,
  Menu,
  MenuItem,
} from '@material-ui/core';
import {
  Share as ShareIcon,
  FavoriteBorder as FavoriteBorderIcon,
  ChatBubbleOutline as ChatBubbleOutlineIcon,
  Reply as ReplyIcon,
  MoreHoriz as MoreHorizIcon,
} from '@material-ui/icons';

import moment from 'moment';

import Avatar, { OnlineBadge, OfflineBadge } from '../avatar';

const useStyles = makeStyles(theme => ({
  root: {
    'paddingTop': '1em',
    'paddingBottom': '1em',
    'marginTop': '0',
    'marginBottom': '0',
    'borderRadius': theme.spacing(1),
    'position': 'relative',
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
    '& a': {
      'color': 'inherit',
      'textDecoration': 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  slug: {
    opacity: 0.7,
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.7em',
  },
  media: {
    'position': 'relative',
    'height': '200px',
    '& div': {
      borderRadius: theme.spacing(1),
    },
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    paddingTop: '1em',
    width: '100%',
    height: '100%',
  },
  actions: {
    display: 'flex',
    marginTop: '1em',
    justifyContent: 'space-around',
    // backgroundColor: theme.palette.grey[200],
    // borderRadius: theme.spacing(1),
    width: '80%',
    alignSelf: 'center',
    margin: '0 auto',
  },
  more: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

export function SubMenu() {
  const classes = useStyles();

  const [anchor, setAnchor] = React.useState(null);

  const handleClick = event => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  return (
    <>
      <IconButton
        aria-controls="more-options-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.more}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        id="more-options-menu"
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Report Post</MenuItem>
        <MenuItem onClick={handleClose}>Block User content</MenuItem>
      </Menu>
    </>
  );
}

export function ActionBar({ comments, likes }) {
  const classes = useStyles();

  return (
    <Box className={classes.actions}>
      <IconButton>
        <ShareIcon />
      </IconButton>
      <IconButton>
        <ReplyIcon />
      </IconButton>
      <IconButton>
        {likes ? (
          <Badge
            badgeContent={likes}
            alt={likes}
            color="secondary"
            className={classes.likes}
          >
            <FavoriteBorderIcon />
          </Badge>
        ) : (
          <FavoriteBorderIcon />
        )}
      </IconButton>
      <IconButton>
        {comments ? (
          <Badge
            badgeContent={comments}
            alt={comments}
            color="secondary"
            className={classes.comments}
          >
            <ChatBubbleOutlineIcon />
          </Badge>
        ) : (
          <ChatBubbleOutlineIcon />
        )}
      </IconButton>
    </Box>
  );
}

export function BaseContent({ user, date, body, image }) {
  const classes = useStyles();

  return (
    <>
      <Box component="div" className={classes.title}>
        <Typography component="span">
          <Typography variant="subtitle1">{user.name}</Typography>
          <Typography
            variant="subtitle1"
            component="span"
            className={classes.slug}
          >
            <Link href={`/user/${slug}`}>{`@${user.slug}`}</Link>{' '}
          </Typography>
          <Typography variant="subtitle2" component="span">
            • Posted {moment(date).fromNow()}
          </Typography>
        </Typography>
      </Box>
      <Typography variant="h6" paragraph>
        {body}
      </Typography>

      {image && (
        <Box className={classes.media}>
          <Image
            src={image}
            alt="Post Media"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
      )}
    </>
  );
}

export function AvatarBox({ user, isOnline, size = 'extra-small' }) {
  const classes = useStyles();

  return (
    <Box className={classes.center}>
      <Avatar
        src={user.avatar}
        alt={`${user.name} Avatar`}
        size={size}
        badge={isOnline ? OnlineBadge : OfflineBadge}
      />
    </Box>
  );
}

export default function FeedItem({
  user,
  date,
  body,
  image = null,
  isOnline = false,
  likes = 0,
  comments = 0,
}) {
  const classes = useStyles();

  return (
    <Box component="article">
      <Grid container spacing={2} className={classes.root}>
        <SubMenu />
        <Grid item xs={2}>
          {/* avatar */}
          <AvatarBox user={user} isOnline={isOnline} />
        </Grid>
        <Grid item xs={9}>
          {/* content */}
          <BaseContent user={user} date={date} body={body} image={image} />

          <ActionBar comments={comments} likes={likes} />
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
}

FeedItem.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }),
  date: PropTypes.instanceOf(Date).isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string,
  isOnline: PropTypes.bool,
  likes: PropTypes.number,
  comments: PropTypes.number,
};

// TODO: Add click image => expand
