import React from "react";
import PropTypes from "prop-types";
import CssBaselineM from "@material-ui/core/CssBaseline";

function CssBaseline(props) {
  return <CssBaselineM {...props}>{props.children}</CssBaselineM>;
}

CssBaseline.propTypes = {
  /**
   * You can wrap a node.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  classes: PropTypes.object
};

export { CssBaseline as default };
