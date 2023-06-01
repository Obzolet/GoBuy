import { createContext } from "react";

const CarritoContext = createContext({items: [],total: 0}); //Agrego un array vacio, para que a todos les llegue una informacion

export default CarritoContext;
