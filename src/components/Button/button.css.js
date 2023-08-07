import { css, jsx } from "@emotion/react";

export const buttonStyles = (type, width) => {
  if (type === "primary") {
    return css`
      color: white;
      background-color: #188899;
      padding: 10px;
      max-width: 410px;
      border-radius: 10px;
      font-weight: 600;
      width: ${width}%;
    `;
  }
};
