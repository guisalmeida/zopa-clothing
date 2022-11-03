import { FormGroup, FormInput, FormLabel } from "./styled";

// @ts-ignore
const Input = ({ label, ...otherProps }) => {
  return (
    <FormGroup>
      <FormInput {...otherProps} />
      {label && (
        <FormLabel
          // @ts-ignore
          shrink={otherProps.value.length}
        >
          {label}
        </FormLabel>
      )}
    </FormGroup>
  );
};

export default Input;
