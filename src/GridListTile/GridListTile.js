import React from "react";
import PropTypes from "prop-types";
import GridListTileM from "@material-ui/core/GridListTile";

function GridListTile(props) {
  return <GridListTileM {...props}>{props.children}</GridListTileM>;
}

GridListTile.propTypes = {
  /**
   * Theoretically you can pass any node as children, but the main use case is to pass an img,
   * in which case GridListTile takes care of making the image "cover" available space
   * (similar to `background-size: cover` or to `object-fit: cover`).
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
   * Width of the tile in number of grid cells.
   */
  cols: PropTypes.number,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.string,

  /**
   * Height of the tile in number of grid cells.
   */
  rows: PropTypes.number 
};

export { GridListTile as default };
