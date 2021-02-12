import * as React from 'react';
import BottomNavigation from '../BottomNavigation';
import BottomNavigationAction from '../../BottomNavigationAction/BottomNavigationAction';
import Icon from '../../Icon/Icon';

export default (
  <BottomNavigation uxpId="1">
      <BottomNavigationAction uxpId="2" label="Home" icon={<Icon uxpId="2.1">home</Icon>} />
      <BottomNavigationAction uxpId="3" label="Recents" icon={<Icon uxpId="3.1">restore</Icon>} />
      <BottomNavigationAction uxpId="4" label="user" icon={<Icon uxpId="4.1">person</Icon>} />
  </BottomNavigation>
);
