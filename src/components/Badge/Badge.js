import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @mui/material components
import { makeStyles } from "@mui/styles";

import styles from "assets/jss/react-core/components/badgeStyle";

const useStyles = makeStyles(styles);

export default function Badge(props) {
  const { color, children, className } = props;
  const classes = useStyles();
  const badgeClasses = classNames({
    [classes.badge]: true,
    [classes[color]]: true,
    [className]: className !== undefined,
  });
  return <span className={badgeClasses}>{children}</span>;
}

Badge.defaultProps = {
  color: "gray",
};

Badge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
};
