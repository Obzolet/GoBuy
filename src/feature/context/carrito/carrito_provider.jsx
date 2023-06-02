import  { useState } from 'react';
import CarritoContext from './carrito_context';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (product.quantity > 0) {
      const existingProduct = cartItems.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity < product.quantity) {
          setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          );
        } else {
          console.log("No se pueden agregar más unidades de este producto al carrito");
        }
      } else {
        setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
      }
    } else {
      console.log("No hay stock disponible de este producto");
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        if (newQuantity <= item.quantity) {
          return {
            ...item,
            quantity: newQuantity,
          };
        } else {
          console.log("No se pueden pedir más unidades de este producto de las disponibles");
          return item;
        }
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const updateStock = (productId, newStock) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          stock: newStock,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.precio * item.quantity;
    });
    return total;
  };

  return (
    <CarritoContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, updateStock, calculateTotal }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
export default CartProvider;