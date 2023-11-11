import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);

  useEffect(() => {
    console.log('items', cartItems);
    console.log('total', totalQty);
  }, [cartItems, totalQty]);

  function onAdd(product, qty) {
    setTotalPrice((prevPrice) => prevPrice + product.price * qty);

    setTotalQty((prevQty) => prevQty + qty);

    const productInCart = cartItems.find((item) => item.id === product.id);
    if (productInCart) {
      const newCartItems = cartItems.map((item) =>
        productInCart.id === item.id
          ? { ...productInCart, quantity: productInCart.quantity + qty }
          : item
      );
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: qty }]);
    }
  }

  function onRemove(product) {
    const productInCart = cartItems.find((item) => item.id === product.id);
    if (!productInCart) return;

    setTotalPrice((prevPrice) => prevPrice - product.price);

    setTotalQty((prevQty) => prevQty - 1);

    if (productInCart.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      const newCartItems = cartItems.map((item) =>
        productInCart.id === item.id
          ? { ...productInCart, quantity: productInCart.quantity - 1 }
          : item
      );
      setCartItems(newCartItems);
    }
  }

  return (
    <CartContext.Provider
      value={{ cartItems, totalPrice, totalQty, onAdd, onRemove }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => useContext(CartContext);
