import * as React from 'react';
import MenuList from '../MenuList';
import MenuItem from "../../MenuItem/MenuItem";
import ListItemIcon from "../../ListItemIcon/ListItemIcon";
import ListItemText from "../../ListItemText/ListItemText";
import Icon from "../../Icon/Icon";

export default (
  <MenuList uxpId="1">
    <MenuItem uxpId="2">
      <ListItemIcon uxpId="2.1">
        <Icon uxpId="2.1.1">
        send
        </Icon>
      </ListItemIcon>
      <ListItemText uxpId="2.1.2" inset primary="Send mail" />
    </MenuItem>
    <MenuItem uxpId="3">
      <ListItemIcon uxpId="3.1">
        <Icon uxpId="3.1.1">
        drafts
        </Icon>
      </ListItemIcon>
      <ListItemText uxpId="3.1.2" inset primary="Drafts" />
    </MenuItem>
    <MenuItem uxpId="4">
      <ListItemIcon uxpId="4.1">
        <Icon uxpId="4.1.1">
        inbox
        </Icon>
      </ListItemIcon>
      <ListItemText uxpId="4.1.2" inset primary="Inbox" />
    </MenuItem>
  </MenuList>
);