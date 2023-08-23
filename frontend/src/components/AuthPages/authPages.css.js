import { css, jsx } from "@emotion/react";

export const backgroundStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const bodyStyle = css`
  display: flex;
  width: 300px;
  flex-direction: column;
  align-items: center;
  .header-text {
    color: #283d67;
    align-self: flex-start;
    font-size: 24px;
  }
`;
export const disclaimer = css`
  font-size: 10px;
  margin: 24px 0;
`;
export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-self: normal;
  input {
    width: 100%;
    padding: 4px;
    border-style: none none solid none;
    margin: 12px 0;
  }
`;
export const ellieStyle = css`
  width: 200px;
  height: 200px;
  margin-bottom: 24px;
  // border: 1px solid;
`;
