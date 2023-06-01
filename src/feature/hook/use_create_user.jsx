import  { useState } from 'react';
import useUserData from './use_data_user';

const UseCreateUser = () => {
    const {urlApi,setUsers} = useUserData();
    
    const createUser = async (user) => {
        try {
          const name  = user.name;
          const email = user.email;
          const password = user.password;
    
          const response = await fetch(urlApi, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            
            body: JSON.stringify({name,email,password,}),
          });
          const newUser = await response.json();
          setUsers((prevUsers) => [...prevUsers, newUser]);
    
          console.log("datos enviados:", newUser);
        } catch (error) {
          console.error("Error creating user:", error);
        }
      };
      return {createUser,};
}

export default UseCreateUser;
