import styled from "styled-components";

export const BackdropContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  top: 0;
  right: 0;
  opacity: 0;
  visibility: hidden;
  z-index: 98;
  transition: all 0.3s ease-out;

  ${(props) =>
    //@ts-ignore
    props.isShowCart && `
    opacity: 1;
    visibility: visible;
  `}
`;
