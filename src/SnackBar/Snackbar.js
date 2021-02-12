import React from "react";
import PropTypes from "prop-types";
import SnackbarM from "@material-ui/core/Snackbar";

function Snackbar(props) {
  return <SnackbarM {...props} />;
}

Snackbar.propTypes = {
 /**
   * The action to display.
   */
  action: PropTypes.node,

  /**
   * The anchor of the `Snackbar`.
   */
  anchorOrigin: PropTypes.shape({
    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
    vertical: PropTypes.oneOf(['top', 'bottom'])
  }),

  /**
   * The number of milliseconds to wait before automatically calling the
   * `onClose` function. `onClose` should then set the state of the `open`
   * prop to hide the Snackbar. This behavior is disabled by default with
   * the `null` value.
   */
  autoHideDuration: PropTypes.number,

  /**
   * Replace the `SnackbarContent` component.
   */
  children: PropTypes.element,

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
   * Properties applied to the `ClickAwayListener` element.
   */
  ClickAwayListenerProps: PropTypes.object,

  /**
   * Properties applied to the [`SnackbarContent`](/api/snackbar-content/) element.
   */
  ContentProps: PropTypes.object,

  /**
   * If `true`, the `autoHideDuration` timer will expire even if the window is not focused.
   */
  disableWindowBlurListener: PropTypes.bool,

  /**
   * When displaying multiple consecutive Snackbars from a parent rendering a single
   * <Snackbar/>, add the key property to ensure independent treatment of each message.
   * e.g. <Snackbar key={message} />, otherwise, the message may update-in-place and
   * features such as autoHideDuration may be canceled.
   */
  key: PropTypes.any,

  /**
   * The message to display.
   */
  message: PropTypes.node,

  /**
   * Callback fired when the component requests to be closed.
   * Typically `onClose` is used to set state in the parent component,
   * which is used to control the `Snackbar` `open` prop.
   * The `reason` parameter can optionally be used to control the response to `onClose`,
   * for example ignoring `clickaway`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"timeout"` (`autoHideDuration` expired) or: `"clickaway"`
   */
  onClose: PropTypes.func,

  /**
   * Callback fired before the transition is entering.
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired when the transition has entered.
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired when the transition is entering.
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired before the transition is exiting.
   */
  onExit: PropTypes.func,

  /**
   * Callback fired when the transition has exited.
   */
  onExited: PropTypes.func,

  /**
   * Callback fired when the transition is exiting.
   */
  onExiting: PropTypes.func,

  /**
   * @ignore
   */
  onMouseEnter: PropTypes.func,

  /**
   * @ignore
   */
  onMouseLeave: PropTypes.func,

  /**
   * If true, `Snackbar` is open.
   */
  open: PropTypes.bool,

  /**
   * The number of milliseconds to wait before dismissing after user interaction.
   * If `autoHideDuration` property isn't specified, it does nothing.
   * If `autoHideDuration` property is specified but `resumeHideDuration` isn't,
   * we default to `autoHideDuration / 2` ms.
   */
  resumeHideDuration: PropTypes.number,

  /**
   * The component used for the transition.
   */
  TransitionComponent: PropTypes.node,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),

  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: PropTypes.object
};

export { Snackbar as default };
