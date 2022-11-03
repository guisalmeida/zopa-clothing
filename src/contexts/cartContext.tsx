import { createContext, useState, useEffect } from "react";
import { priceToNumber } from "../utils/currency";

//@ts-ignore
const incrementItem = (cartItem) => {
  return { ...cartItem, quantity: (cartItem.quantity += 1) };
};
//@ts-ignore
const decrementItem = (cartItems, item) => {
  const existingCartItem = cartItems.find(
    //@ts-ignore
    (cartItem) => cartItem.selectedSize === item.selectedSize
  );
  if (existingCartItem) {
    //@ts-ignore
    return cartItems.map((cartItem) => {
      return cartItem.selectedSize === item.selectedSize
        ? { ...cartItem, quantity: (cartItem.quantity -= 1) }
        : cartItem;
    });
  }
  return;
};
//@ts-ignore
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    //@ts-ignore
    (cartItem) => cartItem?.selectedSize === productToAdd.selectedSize
  );
  if (existingCartItem) {
    //@ts-ignore
    return cartItems.map((cartItem) => {
      return cartItem.selectedSize === productToAdd.selectedSize
        ? incrementItem(cartItem)
        : cartItem;
    });
  }
  return [...cartItems, { ...productToAdd }];
};

//@ts-ignore
const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    //@ts-ignore
    (cartItem) => cartItem.selectedSize === cartItemToRemove.selectedSize
  );
  if (!existingCartItem) return;
  //@ts-ignore
  return cartItems.filter((cartItem) => {
    return cartItem.selectedSize !== cartItemToRemove.selectedSize;
  });
};

export const CartContext = createContext({
  isShowCart: false,
  setIsShowCart: () => {},
  cartItems: [],
  setCartItems: () => {},
  cartItemsCount: 0,
  setCartItemsCount: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  decrementItemFromCart: () => {},
  setCartItemsTotal: () => {},
  cartItemsTotal: 0,
});

// @ts-ignore
export const CartProvider = ({ children }) => {
  const [isShowCart, setIsShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsTotal, setCartItemsTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      // @ts-ignore
      (total, cartItem) => (total += cartItem.quantity),
      0
    );
    setCartItemsCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    //@ts-ignore
    const totalAmountCart = cartItems.reduce((total, cartItem) => {
      //@ts-ignore
      const priceNumber = priceToNumber(cartItem.actual_price);
      //@ts-ignore
      const actualPrice = priceNumber * cartItem.quantity;
      return (total += actualPrice);
    }, 0);
    setCartItemsTotal(totalAmountCart);
  }, [cartItems]);

  // @ts-ignore
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    if (window.location.pathname !== "/checkout") {
      setIsShowCart(true);
    }
  };

  // @ts-ignore
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  // @ts-ignore
  const decrementItemFromCart = (item) => {
    // @ts-ignore
    setCartItems(decrementItem(cartItems, item));
  };

  const value = {
    isShowCart,
    setIsShowCart,
    cartItems,
    setCartItems,
    cartItemsCount,
    setCartItemsCount,
    addItemToCart,
    removeItemFromCart,
    decrementItemFromCart,
    cartItemsTotal,
    setCartItemsTotal,
  };

  return (
    // @ts-ignore
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
