//Cargo los datos del contexto con un proveedor

import React, { createContext } from 'react';
import CarritoContext from "../context/CarritoContext";

const CarritoProvider = ({ children }) => {

    const [cart, update] = useState({ items: [], total: 0 }); // Me devuelve la informacion
    const add = function (producto) { // a producto le sumo la cantidad 
        //Add es una accion que yo le añado, primero al value para entender quien quieroo enviar estos valores
        //Si el producto yaa esta en el carrito, dentro de items   
        return update({ 
            items: [...cart.items, { ...producto, cantidad: 1 }],
            total: [...cart.items, { ...producto, cantidad: 1}]
            .map ((producto) => producto.precio*cantidad)
            .reduce((previo, actual) => (actual += previo), 0), //Total se calcula teniendo el cart items igualando a { ...producto, cantidad: 1 }, una vez ya esta agregado le agrego un map().reduce()
        //El map se usa primero para calcular el producto x precio, then reduce hace la suma de el precio * cantidad, para esto se toma dos valores un valor precio y el actual cuando se realiza la accion

        });

};

//Falta el remove para quitar y calcular el total
const remove = function (id) { // id del producto
    //Remove es una accion que yo le añado, primero al value para entender quien quieroo enviar estos valores 

    // Si el producto ya esta dentro del carrito y su cantidad es < 1
    return update({ 
        items: [...cart.items].filter((producto) => producto.id != id), // Lo filtro
        total: [...cart.items]
        .filter((producto)).filter((producto) => producto.id != id)
        .map ((producto) => producto.precio*cantidad)
        .reduce((previo, actual) => (actual += previo), 0), //Total se calcula teniendo el cart items igualando a { ...producto, cantidad: 1 }, una vez ya esta agregado le agrego un map().reduce()
    //El map se usa primero para calcular el producto x precio, then reduce hace la suma de el precio * cantidad, para esto se toma dos valores un valor precio y el actual cuando se realiza la accion

    });

};
const set = function (id){ // Ahora declaro set

    return update({ 
        items: [...cart.items].filter((producto) => producto.id != id), // Metodo array no es filtro
        total: [...cart.items]
        .filter((producto)).filter((producto) => producto.id != id)
        .map ((producto) => producto.precio*cantidad)
        .reduce((previo, actual) => (actual += previo), 0), //Total se calcula teniendo el cart items igualando a { ...producto, cantidad: 1 }, una vez ya esta agregado le agrego un map().reduce()
    //El map se usa primero para calcular el producto x precio, then reduce hace la suma de el precio * cantidad, para esto se toma dos valores un valor precio y el actual cuando se realiza la accion

    });



};
//En el siguiente return mando cart, add, remove y set
    return (
        <CarritoContext.Provider value={{ cart, add, remove, set }}> 
            {children}
        </CarritoContext.Provider>
    );
};


export default CarritoProvider;
//React router
//Mochapi https://drive.google.com/drive/folders/1NijY6nrC9jGr-iQgSAxibkIRTEIQRnts