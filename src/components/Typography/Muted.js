import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui/material components
import { makeStyles } from "@mui/styles";
// core components
import styles from "assets/jss/react-core/components/typographyStyle";

const useStyles = makeStyles(styles);

export default function Muted(props) {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.defaultFontStyle + " " + classes.mutedText}>
      {children}
    </div>
  );
}

Muted.propTypes = {
  children: PropTypes.node,
};
