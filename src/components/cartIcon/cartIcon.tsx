import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

import { ReactComponent as CartIconSvg } from "../../assets/cart-icon.svg";

import { CartIconCounter } from "./styled";

const CartIcon = () => {
  const { cartItemsCount } = useContext(CartContext);
  return (
    <>
      <CartIconCounter>{cartItemsCount}</CartIconCounter>
      <CartIconSvg />
    </>
  );
};

export default CartIcon;
