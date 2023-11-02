import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  //Add Product To Cart
  const onAdd = (product, quantity) => {
    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );

    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity + quantity);

    //Check if product already existed in the cart
    const existedProduct = cartItems.find((item) => item.id === product.id);
    if (existedProduct) {
      console.log('existed');
      const newCartItems = cartItems.map((item) =>
        existedProduct.id === item.id
          ? {
              ...product,
              quantity: existedProduct.quantity + 1,
            }
          : item
      );

      setCartItems(newCartItems);
    } else {
      console.log('not existed');
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  //Remove product
  const onRemove = (product) => {
    const productInCart = cartItems.find((item) => item.id === product.id);

    if (!productInCart) return;
    //Set Total Price
    setTotalPrice((prevTotalPrice) => prevTotalPrice - product.price);

    //Remove from total quantities
    setTotalQuantity((prevTotalQuantity) => prevTotalQuantity - 1);

    if (productInCart.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productInCart, quantity: productInCart.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        onAdd,
        onRemove,
        totalPrice,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
