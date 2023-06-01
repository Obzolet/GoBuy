//Aqui se meten los productos, muestro la lista de productos

import React, { useContext } from "react";
import CarritoContext from "../context/CarritoContext";


const Price = () => {
    const {items} = useContext(CarritoContext); //Creo funcion para recivir los valores que quiero  del provider

    return( 
     <ul>   
    
        {items.map( (item,index) =>( //Index es la posicion del array
        <button key={index} type="button">     
          {item.total}
        </button>            
        ))}
        
    
    

    </ul>
    //El key va a ser el index que ocupa cada item, ya con esto ya traje el contexto
    ); // Va a recibir los items del provider
};
//Map transforma el array de datos en info
export default Price;

//Llamo a la api para el producto

//Agregar con buton o que cree una ventanita agregar