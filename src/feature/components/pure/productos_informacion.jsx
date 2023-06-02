
import React, { useContext, useEffect, useState } from "react";
import { producto as datos_productos } from "../../../common/datos_entorno";
import CarritoContext from '../../context/carrito/carrito_context';
import Cart from './carrito';

const Informacion_producto = () => {
  
  const [datos, setDatos] = useState([]);
const { addToCart } = useContext(CarritoContext);
  useEffect(() => {
    setDatos(datos_productos);
  }, []);

  if (datos.length === 0) {
    return <h1>NO HAY DATOS</h1>;
  }

  const handleAddToCart = (productSelected) => {
    addToCart(productSelected);
  };

  return (
  <article id="contenedor_producto">
    <ul id="productos">
      {datos.map((dato) => (
        <li key={dato.id}>
          <h2>{dato.nombre}</h2>
          <img className="img-producto" src={dato.imagen} alt={dato.nombre} />
          <p className="descripcion">{dato.descripcion}</p>
          <span className="precio"> $ {dato.precio}</span>
          <button className="agregar-carrito" onClick={() => handleAddToCart(dato)} > Agregar al carrito </button>
        </li>
      ))}
    </ul>

<Cart/>

</article>
  );
};

export default Informacion_producto;
