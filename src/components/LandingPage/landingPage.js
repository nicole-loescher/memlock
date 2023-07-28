/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import {
  backgroundStyle,
  bodyStyle,
  darkGreySwoopStyle,
  lightGreySwoopStyle,
} from "./landingPage.css";
import Logo from "../../assets/logo.svg";
import Button from "../Button/button";

const LandingPage = () => {
  return (
    <>
      <div css={darkGreySwoopStyle} />
      <div css={lightGreySwoopStyle} />
      <div css={backgroundStyle} />
      <div css={bodyStyle}>
        <img src={Logo} alt="ellieLogo" />
        <Button
          styleType="primary"
          copy="Let`s Go"
          onCLick={(e) => (window.location.href = "/signup")}
        />
      </div>
    </>
  );
};
export default LandingPage;
