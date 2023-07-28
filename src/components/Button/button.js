/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { buttonStyles } from "./button.css";
import { jsx } from "@emotion/react";

const Button = (props) => {
  const { styleType, copy } = props;
  return (
    <button css={buttonStyles(styleType)} {...props}>
      {copy}
    </button>
  );
};

export default Button;
