/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { buttonStyles } from "./button.css";
import { jsx } from "@emotion/react";

const Button = (props) => {
  const { styletype, copy, width } = props;
  return (
    <button css={buttonStyles(styletype, width)} {...props}>
      {copy}
    </button>
  );
};

export default Button;
