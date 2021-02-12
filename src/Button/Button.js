import React from "react";
import PropTypes from "prop-types";
import ButtonM from "@material-ui/core/Button";
import {
  makeStyles,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  button: {
    textTransform: "uppercase",
    fontSize: "1rem"
  },
  buttonMargin: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  }
}));


function Button(props) {
  const classes = useStyles();
  return (
    <ButtonM {...props} onClick={props.onClick} className={`${classes.button} ${classes.buttonMargin}`}>
      {props.children}
    </ButtonM>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  /**
   * The content of the button.
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  className: PropTypes.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.oneOf(["default", "inherit", "primary", "secondary"]),
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  focusVisibleClassName: PropTypes.string,
  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: PropTypes.string,
  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: PropTypes.bool,
  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.string,

  /**
   * The variant to use.
   * __WARNING__: `flat` and `raised` are deprecated.
   * Instead use `text` and `contained` respectively.
   * `fab` and `extendedFab` are deprecated.
   * Instead use `<Fab>` and `<Fab variant="extended">`
   */
  variant: PropTypes.oneOf([
    "text",
    "outlined",
    "contained",
    "fab",
    "extendedFab",
    "flat",
    "raised"
  ])
};

export { Button as default };
