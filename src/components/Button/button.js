import { buttonStyles } from "./button.css";

const Button = ({ type, copy }) => {
  return <button css={buttonStyles(type)}>{copy}</button>;
};

export default Button;
