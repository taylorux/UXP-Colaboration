import * as React from "react";

import IglooHeader from "../IglooHeader";
// import TestComponent from '../../TestComponent/TestComponent';
import Icon from "../../Icon/Icon";
import IconButton from "../../IconButton/IconButton";
import Badge from "../../Badge/Badge";


let menus = 
  [
    {
        "active": true,
        "opened": true,
        "label": "Marketing Services",
        "submenu": [
            {
                "label": "Branding",
                "submenu": [
                    {
                        "label": "Brochures"
                    },
                    {
                        "label": "Business Cards"
                    },
                    {
                        "label": "Logos"
                    }
                ]
            },
            {
                "label": "Variable Printing",
                "submenu": [
                    {
                        "label": "Igen"
                    },
                    {
                        "label": "1-to-1"
                    }
                ]
            },
            {
                "label": "Loyalty",
                "active": true,
            },
            {
                "label": "Social Media"
            }
        ]
    },
    {
        "icon": "data_usage",
        "label": "Data Solutions"
    },
    {
        "icon": "widgets",
        "label": "Technology"
    },
    {
        "icon": "bookmarkss",
        "label": "From Side"
    }
]

let accountMenu = [
    { label: "Profile" },
    { label: "Favorites" },
    { label: "Marketing Lists" },
    { label: "All Orders", hasDivider: true },
    { label: "Logout", icon: "cancel" }
  ]

export default (
  <IglooHeader uxpId="1"
  menus={menus}
  logoSrc = "https://uc.uxpin.com/files/732773/730600/image-6d6f68.png"
  logoAlt = "IGLOO Design System"
  desktopNavigationVariant = "vertical"
  hasAccountIcon = {true}
  accountMenu= {accountMenu}
  hasSearch = {true}
  inline = {true}
  hasNavigation = {false}
  >
    <IconButton
      arialabel="Notifications"
      color="primary"
      uxpId="1.1"
      color="primary"
    >
      <Icon uxpId="1.1.1">notifications</Icon>
    </IconButton>
    <IconButton arialabel="Shopping Cart" color="primary" uxpId="1.2" >
      <Badge badgeContent="3" max="9" uxpId="1.2.1">
        <Icon uxpId="1.2.1.1">shopping_cart</Icon>
      </Badge>
    </IconButton>
  </IglooHeader>
);
