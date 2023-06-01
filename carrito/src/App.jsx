import { useState } from "react";
import Price from "./components/Price";
import ListaProductos from "./ListaProductos";


const App = () => {
  const [show, update] = useState("home");
  return (
    <>
      <nav>
        <a
          href="home"
          onClick={(e) => { //Llama la funcion cuando le doy click
            e.preventDefault(); //Evita enviar a otra pestaña
            update(e.target.href);
          }}
        >
          Home
        </a>
      </nav>
      {show && show == "/" ? <Products /> : null} 
    </>
  );
};
export default App;
//Si la variable "show" es verdadera y es igual a "/", se renderiza el componente "Products", de lo contrario, no se renderiza nada (null).