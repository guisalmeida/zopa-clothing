import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import { BackdropContainer } from "./styled";
//@ts-ignore
const Backdrop = () => {
  const { isShowCart, setIsShowCart } = useContext(CartContext);

  return (
    <BackdropContainer
      //@ts-ignore
      isShowCart={isShowCart}
      //@ts-ignore
      onClick={() => setIsShowCart(false)}
    ></BackdropContainer>
  );
};

export default Backdrop;
