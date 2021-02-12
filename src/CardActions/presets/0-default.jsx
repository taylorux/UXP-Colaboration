import * as React from 'react';
import CardActions from '../CardActions';
import IconButton from '../../IconButton/IconButton';
import Icon from '../../Icon/Icon';

export default (
  <CardActions uxpId="1">
    <IconButton uxpId="2" aria-label="Add to favorites">
      <Icon uxpId="21">favorite</Icon>
    </IconButton>
    <IconButton uxpId="3" aria-label="Share">
      <Icon uxpId="31">share</Icon>
    </IconButton>
  </CardActions>
);