import React from "react";
import PropTypes from "prop-types";
import ExpansionPanelSummaryM from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function ExpansionPanelSummary(props) {
  return (
    <ExpansionPanelSummaryM {...props}
    style={{fontSize: "20px", fontWeight: "regular"}}
    expandIcon={<ExpandMoreIcon />}
    >{props.children}</ExpansionPanelSummaryM>
  );
}

ExpansionPanelSummary.propTypes = {
  /**
   * The content of the expansion panel summary.
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
  className: PropTypes.string,

  /**
   * @ignore
   * If `true`, the summary will be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * @ignore
   * If `true`, expands the summary, otherwise collapse it.
   */
  expanded: PropTypes.bool,

  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: PropTypes.node,

  /**
   * Properties applied to the `TouchRipple` element wrapping the expand icon.
   */
  IconButtonProps: PropTypes.object,

  /**
   * @ignore
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onClick: PropTypes.func
};

export { ExpansionPanelSummary as default };
