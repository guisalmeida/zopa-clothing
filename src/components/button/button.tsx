import { BaseButton, GoogleButton, InvertedButton } from "./styled";

const BUTTON_TYPE_CLASSES = {
  base: BaseButton,
  google: GoogleButton,
  inverted: InvertedButton,
};

// @ts-ignore
const Button = ({ children, buttonType, ...otherProps }) => {
  // @ts-ignore
  const CustomButton = BUTTON_TYPE_CLASSES[buttonType];
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
