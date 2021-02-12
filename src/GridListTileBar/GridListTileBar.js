import React from "react";
import PropTypes from "prop-types";
import GridListTileBarM from "@material-ui/core/GridListTileBar";

function GridListTileBar(props) {
  return <GridListTileBarM {...props}>{props.children}</GridListTileBarM>;
}

GridListTileBar.propTypes = {
 /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the tile itself).
   */
  actionIcon: PropTypes.node,

  /**
   * Position of secondary action IconButton.
   */
  actionPosition: PropTypes.oneOf(['left', 'right']),

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
   * String or element serving as subtitle (support text).
   */
  subtitle: PropTypes.node,

  /**
   * Title to be displayed on tile.
   */
  title: PropTypes.node,

  /**
   * Position of the title bar.
   */
  titlePosition: PropTypes.oneOf(['top', 'bottom'])  
};

export { GridListTileBar as default };
