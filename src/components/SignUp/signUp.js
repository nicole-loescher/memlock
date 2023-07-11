/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";

const SignUpPage = () => {
  return (
    <>
      <div css={darkGreySwoopStyle} />
      <div css={lightGreySwoopStyle} />
      <div css={backgroundStyle} />
      <div css={bodyStyle}>
        <img src={Logo} alt="ellieLogo" />
        <button css={buttonStyles}>Let's Go</button>
      </div>
    </>
  );
};
export default SignUpPage;
