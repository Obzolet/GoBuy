import  { useState, useEffect } from 'react';
import useUserData from './use_data_user';


const UseAuthUser = () => {

  const { urlApi } = useUserData();
;
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [authenticatedEmail, setAuthenticatedEmail] = useState(null);

  useEffect(() => {
    // Aquí puedes realizar cualquier lógica adicional cuando el usuario autenticado cambie
    console.log("Usuario autenticado:", authenticatedUser);
  }, [authenticatedUser]);

  const authenticateUser = async (email, password, onSuccess, onFailure,authEmail) => {
    try {
      // trae el api para usarlo en el hook create
      const response = await fetch(urlApi);
      const usersData = await response.json();
      const authenticatedUser = usersData.find(
        (user) => user.email === email && user.password === password
      );
      const authenticatedEmail = usersData.find(
        (user) => user.email===email
      );
     
      if(!authenticatedEmail){
        setAuthenticatedEmail(authenticatedEmail);
        authEmail();
      }else  if (authenticatedUser) {
        setAuthenticatedUser(authenticatedUser);
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

import React from 'react';


