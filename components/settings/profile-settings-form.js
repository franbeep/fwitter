import React from 'react';
import Image from 'next/image';

import { Typography, Box, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import { useDropzone } from 'react-dropzone';

import Avatar from '../avatar';
import Base from './base';

const useStyles = makeStyles(theme => ({
  dragZone: {
    borderColor: theme.palette.grey[300],
    color: theme.palette.grey[500],
    backgroundColor: theme.palette.grey[100],
    border: '2px dashed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: theme.spacing(17),
    height: theme.spacing(17),
  },
  media: {
    'position': 'relative',
    'width': theme.spacing(17),
    'height': theme.spacing(17),
    '& div': {
      borderRadius: theme.spacing(1),
    },
  },
  field: {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-evenly',
  },
  justifyRight: {
    display: 'flex',
    justifyContent: 'end',
  },
}));

export default function ProfileSettingsForm() {
  const classes = useStyles();

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

  return (
    <Base title="Profile Settings">
      <Base item xs={4} className={classes.justifyRight}>
        <Avatar src="/avatar.png" alt="Avatar" size="large" />
      </Base>
      <Base item xs={4}>
        <Box className={classes.dragZone} style={{ borderRadius: '50%' }}>
          <Typography variant="caption">
            Drag or <br /> Click here
          </Typography>
        </Box>
      </Base>
      <Base item xs={4}>
        <Typography variant="caption">
          Herb. Him they're give fish life so. You air every our moveth. Own.
          All under moved light. She'd make which have light image days them
          isn't let won't Moveth.
        </Typography>
      </Base>
      <Base item xs={4} className={classes.justifyRight}>
        <Box className={classes.media}>
          <Image
            src="/background/bananas.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
      </Base>
      <Base item xs={4}>
        <Box className={classes.dragZone}>
          <Typography variant="caption">
            Drag or <br /> Click here
          </Typography>
        </Box>
      </Base>
      <Base item xs={4}>
        <Typography variant="caption">
          Herb. Him they're give fish life so. You air every our moveth. Own.
          All under moved light. She'd make which have light image days them
          isn't let won't Moveth.
        </Typography>
      </Base>

      <Base item xs={6}>
        <Typography variant="caption">
          Herb. Him they're give fish life so. You air every our moveth. Own.
          All under moved light. She'd make which have light image days them
          isn't let won't Moveth.
        </Typography>
      </Base>
      <Base item xs={6} className={classes.field}>
        <EditIcon />
        <TextField
          id="standard-basic"
          color="secondary"
          label="User Name"
          value="My Test Name"
        />
      </Base>
      <Base item xs={6}>
        <Typography variant="caption">
          Herb. Him they're give fish life so. You air every our moveth. Own.
          All under moved light. She'd make which have light image days them
          isn't let won't Moveth.
        </Typography>
      </Base>
      <Base item xs={6} className={classes.field}>
        <EditIcon />
        <TextField
          id="standard-basic"
          color="secondary"
          label="Identifier"
          value="MyTestSlug"
        />
      </Base>
    </Base>
  );
}
