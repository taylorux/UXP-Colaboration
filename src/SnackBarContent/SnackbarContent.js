import React from "react";
import PropTypes from "prop-types";
import SnackbarContentM from "@material-ui/core/SnackbarContent";

function SnackbarContent(props) {
  return <SnackbarContentM {...props} />;
}

SnackbarContent.propTypes = {
/**
   * The action to display.
   */
  action: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * The message to display.
   */
  message: PropTypes.node 
};

export { SnackbarContent as default };
