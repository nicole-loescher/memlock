import { buttonStyles } from "./button.css";

const Button = (props) => {
  const { styleType, copy } = props;
  return (
    <button css={buttonStyles(styleType)} {...props}>
      {copy}
    </button>
  );
};

export default Button;
