import { createContext, useReducer } from "react";
import { priceToNumber } from "../utils/currency";
import { createAction } from "../utils/reducer/reducer";

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
  cartItemsCount: 0,
  cartItemsTotal: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  decrementItemFromCart: () => {},
});

const CART_ACTIONS_TYPES = {
  SET_CART_ITENS: 'SET_CART_ITENS',
  SET_MINICART_OPEN: 'SET_MINICART_OPEN'
}

const INITIAL_STATE = {
  isShowCart: false,
  cartItems: [],
  cartItemsCount: 0,
  cartItemsTotal: 0,
}

const cartReducer = (state: any, action: { type: any; payload: any; }) => {
  const {type, payload} = action

  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITENS:
      return {
        ...state,
        ...payload
      }

    case CART_ACTIONS_TYPES.SET_MINICART_OPEN:
      return {
        ...state,
        isShowCart: payload
      }

    default:
      throw new Error(`unhandled type of ${type} in cartReducer!`);
  }
}

// @ts-ignore
export const CartProvider = ({ children }) => {
  const [{cartItems, isShowCart, cartItemsCount, cartItemsTotal}, 
    dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const updateCartItensReducer = (newCartItens: any) => {
    const newCartItemsCount = cartItems.reduce((total: any, cartItem: { quantity: any; }) => 
      (total += cartItem.quantity), 0
    );

    const newCartItensTotal = cartItems.reduce((total: number, cartItem: { actual_price: string; quantity: number; }) => {
      const priceNumber = priceToNumber(cartItem.actual_price);
      const actualPrice = priceNumber * cartItem.quantity;
      return (total += actualPrice);
    }, 0);

    dispatch(createAction(CART_ACTIONS_TYPES.SET_CART_ITENS, {
        cartItems: newCartItens,
        cartItemsTotal: newCartItensTotal,
        cartItemsCount: newCartItemsCount
      })
    )
  }

  // @ts-ignore
  const addItemToCart = (productToAdd) => {
    const newCartItens = addCartItem(cartItems, productToAdd);
    updateCartItensReducer(newCartItens)

    if (window.location.pathname !== "/checkout") {
      setIsShowCart(true);
    }
  };

  // @ts-ignore
  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItens = removeCartItem(cartItems, cartItemToRemove);
    updateCartItensReducer(newCartItens)
  };

  // @ts-ignore
  const decrementItemFromCart = (item) => {
    // @ts-ignore
    const newCartItens = decrementItem(cartItems, item);
    updateCartItensReducer(newCartItens)
  };

  const setIsShowCart = (bool: Boolean) => {
    dispatch(createAction(CART_ACTIONS_TYPES.SET_MINICART_OPEN, bool))
  }

  const value = {
    isShowCart,
    setIsShowCart,
    cartItems,
    cartItemsCount,
    cartItemsTotal,
    addItemToCart,
    removeItemFromCart,
    decrementItemFromCart
  };

  return (
    // @ts-ignore
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
