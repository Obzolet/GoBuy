import  { useContext, } from 'react';
import CartContext from '../../context/carrito/carrito_context';

const Cart = () => {
  const { cartItems, calculateTotal, removeFromCart, updateQuantity, updateStock } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  const handleBuy = () => {
    cartItems.forEach((item) => {
      updateStock(item.id, item.quantity); // Actualizar stock del producto
      if (item.quantity >= item.stock) {
        removeFromCart(item.id); // Eliminar producto si el stock llega a cero
      }
    });
  };

  return (
  
      <ul id="carrito">

        
      
      {cartItems.map((item) => (

        <li key={item.id}>

          <h2>{item.nombre}</h2>
          <img className="img-producto" src={item.imagen} alt={item.nombre} />
          <span className="precio">Precio: {item.precio}</span>
          <span className="cantidad">Cantidad: {item.quantity}</span>
          <button className="agregar-carrito" onClick={() => handleRemoveFromCart(item.id)}> Quitar del carrito </button>
          
        </li>
      ))}
      <h3>Total: {calculateTotal()}</h3>

      <button className="agregar-carrito" onClick={ handleBuy }>Comprar</button>
</ul>
  );
};

export default Cart;
