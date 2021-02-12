import React from "react";
import PropTypes from "prop-types";
import ExpansionPanelDetailsM from "@material-ui/core/ExpansionPanelDetails";

function ExpansionPanelDetails(props) {
  return <ExpansionPanelDetailsM {...props}>{props.children}</ExpansionPanelDetailsM>;
}

ExpansionPanelDetails.propTypes = {
  /**
   * The content of the expansion panel details.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string
};

export { ExpansionPanelDetails as default };
