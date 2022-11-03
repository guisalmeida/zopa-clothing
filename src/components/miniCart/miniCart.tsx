import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import { priceToStringBr } from "../../utils/currency";
import Slider from "../slider";
import Button from "../button";
import ListItem from "../listItem";

import { CartEmpty } from "./styled";

//@ts-ignore
const MiniCart = ({ showCart }) => {
  //@ts-ignore
  const { cartItems, setIsShowCart, cartItemsCount, cartItemsTotal } =
    useContext(CartContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    //@ts-ignore
    setIsShowCart(false);
    navigate("checkout");
  };

  return (
    <Slider show={showCart} title={`Cart - ${cartItemsCount} Item(s)`}>
      {cartItems?.length > 0 ? (
        //@ts-ignore
        cartItems.map((cartItem, index) => {
          return <ListItem key={index} item={cartItem} />;
        })
      ) : (
        <CartEmpty>Your cart is empty :(</CartEmpty>
      )}
      <p>
        <strong>Subtotal:</strong>{" "}
        {
          //@ts-ignore
          priceToStringBr(cartItemsTotal)
        }
      </p>
      {cartItems?.length > 0 && (
        <Button buttonType="base" onClick={handleCheckout}>
          Go to Cart
        </Button>
      )}
    </Slider>
  );
};

export default MiniCart;
