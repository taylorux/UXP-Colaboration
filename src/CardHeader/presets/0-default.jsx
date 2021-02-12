import * as React from "react";
import CardHeader from "../CardHeader";
import Avatar from '../../Avatar/Avatar';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <CardHeader
    uxpId="1"
    avatar={<Avatar aria-label="Recipe" uxpId="1.1">R</Avatar>}
    action={<IconButton uxpId="1.2"><Icon uxpId="1.2.1">more_vert</Icon></IconButton>}
    title="Shrimp and Chorizo Paella"
    subheader="September 14, 2016"
  />
);
