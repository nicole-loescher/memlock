import { css, jsx } from "@emotion/react";

export const buttonStyles = (type) => {
  if (type === "primary") {
    return css`
      color: white;
      background-color: #1888899;
      padding: 10px;
      max-width: 410px;
      border-radius: 10px;
      font-weight: 600;
    `;
  }
};
