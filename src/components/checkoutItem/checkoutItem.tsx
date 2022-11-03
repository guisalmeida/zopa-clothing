import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import ListQuantity from "../listQuantity";

import { priceToNumber, priceToStringBr } from "../../utils/currency";

import { CheckoutItemContainer, CheckoutItemFigure } from "./styled";
//@ts-ignore
const CheckoutItem = ({ cartItem }) => {
  const {
    name,
    actual_price,
    regular_price,
    quantity,
    image,
    selectedSize,
    on_sale,
  } = cartItem;
  const { removeItemFromCart } = useContext(CartContext);
  const handleDelete = () => {
    //@ts-ignore
    removeItemFromCart(cartItem);
  };

  //@ts-ignore
  const { size } = cartItem.sizes.find(
    //@ts-ignore
    (size) => size.sku === selectedSize
  );

  return (
    <CheckoutItemContainer>
      <CheckoutItemFigure>
        <img
          src={
            image ||
            "https://via.placeholder.com/470x594/FFFFFF/?text=Image+Not+Found"
          }
          alt={name}
        />
      </CheckoutItemFigure>
      <span className="checkout-item__name">
        {name} {size}
      </span>
      <span className="checkout-item__quantity">
        {quantity && <ListQuantity item={cartItem} />}
      </span>
      <span className="checkout-item__price">
        <s>
          {on_sale && priceToStringBr(priceToNumber(regular_price) * quantity)}
        </s>
        <p>{priceToStringBr(priceToNumber(actual_price) * quantity)}</p>
      </span>
      <button className="checkout-item__remove" onClick={handleDelete}>
        &#10005;
      </button>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
