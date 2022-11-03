import styled, {css} from 'styled-components';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 1.2rem;
  color:var(--main-color);
`

export const FormLabel = styled.label`
  color:var(--sub-color);
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  
  ${
  //@ts-ignore
  ({shrink}) => shrink && shrinkLabelStyles}
`

export const FormInput = styled.input`
  background: none;
  background-color:var(--light-grey);
  color: var(--sub-color);
  font-size: 1.8rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--sub-color);
  margin: 25px 0;

  &:focus {
    outline: none;
  }
  
  &:focus ~ ${FormLabel} {
    ${shrinkLabelStyles};
  }
`

export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;
  
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`


