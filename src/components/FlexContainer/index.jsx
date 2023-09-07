import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexContainer.module.scss";
import { FLEX } from "../../constants";

const FlexContainer = ({ children, fd, jc, fw }) => {
  return (
    <section
      className={styles.flex}
      style={{
        flexDirection: fd,
        justifyContent: jc,
        flexWrap: fw,
      }}
    >
      {children}
    </section>
  );
};

FlexContainer.defaultProps = {
  fd: FLEX.DIRECTION,
  jc: FLEX.JUSTIFY,
  fw:FLEX.WRAP,
};

FlexContainer.propTypes = {
  fd: PropTypes.string.isRequired,
  jc: PropTypes.string.isRequired,
  fw: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default FlexContainer;
