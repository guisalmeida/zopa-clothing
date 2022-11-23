import { useContext } from "react";
import Backdrop from "../backdrop";
import { CartContext } from "../../contexts/cartContext";
import { SliderContainer } from "./styled";

//@ts-ignore
const Slider = ({ show, title, children }) => {
  const { isShowCart, setIsShowCart } = useContext(CartContext);
  const handleShowCart = () => {
    //@ts-ignore
    setIsShowCart(!isShowCart);
  };

  return (
    <>
      <SliderContainer
        //@ts-ignore
        show={show}
      >
        <header className="slider__header">
          <button className="slider__back" onClick={handleShowCart}>
            &#10005;
          </button>
          <h3 className="slider__title">{title}</h3>
        </header>
        <div className="slider__content">{children}</div>
      </SliderContainer>
      <Backdrop />
    </>
  );
};

export default Slider;
