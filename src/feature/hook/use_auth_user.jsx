import  { useState, useEffect, useContext } from 'react';
import useUserData from './use_data_user';
import UserContext from '../context/user/user_context';





const UseAuthUser = () => {

  const { urlApi } = useUserData();
  const {setNameContext} = useContext(UserContext)
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [authenticatedEmail, setAuthenticatedEmail] = useState(null);
  
  const authenticateUser = async (email, password, onSuccess, onFailure,authEmail) => {

    try {
      
      // trae el api para usarlo en el hook create
      const response = await fetch(urlApi);
      const usersData = await response.json();
    
      //compara los valores ingresados con los que hay en el json, si se encuentra extrae el json de ese usuario
      const authenticatedUser =  usersData.find(
        (user) => user.email === email && user.password === password
      );
      const authenticatedEmail =  usersData.find(
        (user) => user.email === email
      );
     
      if(!authenticatedEmail){
        setAuthenticatedEmail(authenticatedEmail);
        console.log('usuario inexistente:',email);
        authEmail();
      }else  if (authenticatedUser) {
        setAuthenticatedUser(authenticatedUser);
        // ya autenticado el usuario, se extrae el nombre de este mismo
        const {name} = authenticatedUser; 
        setNameContext(name);
        console.log("Usuario autenticado:", authenticatedUser);
        onSuccess();
      } else {
        onFailure();
        console.log("Autenticación fallida");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return { authenticateUser };
}

export default UseAuthUser;




