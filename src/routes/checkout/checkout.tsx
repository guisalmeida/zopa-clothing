import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import CheckoutItem from "../../components/checkoutItem";
import { priceToStringBr } from "../../utils/currency";

import { CheckoutContainer } from "./styled";

const Checkout = () => {
  const { cartItems, cartItemsTotal } = useContext(CartContext);
  return (
    <CheckoutContainer>
      <div className="checkout__header">
        <div className="checkout__header--block">
          <span>Product</span>
        </div>
        <div className="checkout__header--block">
          <span>Description</span>
        </div>
        <div className="checkout__header--block">
          <span>Quantity</span>
        </div>
        <div className="checkout__header--block">
          <span>Price</span>
        </div>
        <div className="checkout__header--block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => {
        //@ts-ignore
        return <CheckoutItem key={cartItem.code_color} cartItem={cartItem} />;
      })}
      <span className="checkout__total">
        Total:{" "}
        <strong>
          {
            //@ts-ignore
            priceToStringBr(cartItemsTotal)
          }
        </strong>
      </span>
    </CheckoutContainer>
  );
};

export default Checkout;
