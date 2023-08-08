import { css, jsx } from "@emotion/react";

export const backgroundStyle = css`
  background: linear-gradient(
    127deg,
    rgba(160, 160, 160, 1) 0%,
    rgba(211, 211, 211, 1) 20%,
    rgba(255, 255, 255, 1) 100%
  );
  height: 100vh;
  clip-path: ellipse(159% 69% at 119% 21%);
  z-index: 2;
  position: fixed;
  width: 100%;
`;
export const lightGreySwoopStyle = css`
  background-color: rgba(211, 211, 211, 1);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 1;
  clip-path: ellipse(136% 36% at 130% 71%);
`;
export const darkGreySwoopStyle = css`
  z-index: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(140, 140, 140, 1);
`;
export const bodyStyle = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 100px;
  width: 100%;
`;
