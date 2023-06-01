import { useState, useEffect } from "react";
import CarritoStyle from "./styles/Carrito.module.css";

const ListaProductos = () => {
  let [productos, actualizarProductos] = useState([]);

  useEffect(() => {
    const obtenerProductos = () => {
      fetch("https://6477e33d362560649a2d05a3.mockapi.io/Productos")
        .then((respuesta) => respuesta.json())
        .then((data) => actualizarProductos(data))
        .catch((error) => console.error("Error", error));
    };
    obtenerProductos();
    return () => {
      actualizarProductos([]);
    };
  }, []);

  const agregarProducto = () => {
    fetch("https://6477e33d362560649a2d05a3.mockapi.io/Productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product: "Nuevo producto", price: "Nuevo precio" }),
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        actualizarProductos([...productos, data]);
      })
      .catch((error) => console.error("Error", error));
  };

  const eliminarProducto = (id) => {
    fetch(`https://6477e33d362560649a2d05a3.mockapi.io/Productos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        actualizarProductos(productos.filter((producto) => producto.id !== id));
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <>
      <button onClick={agregarProducto}>Agregar</button>
      {productos.length === 0 ? (
        <h2>No hay productos</h2>
      ) : (
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              {producto.name}: <span>{String(producto.price).toLowerCase()}</span>
              <button onClick={() => eliminarProducto(producto.id)}>Borrar</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ListaProductos;
//2023-05-19
//button en vez del ternario