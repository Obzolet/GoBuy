import React, { useContext } from 'react';
import UserContext from '../../context/user/user_context';

import AuthContext from '../../context/auth/auth_context';




const Next = () => {
    const { logout } = useContext(AuthContext); 
    const { name } = useContext(UserContext);
    const handleLogout = ()=>{
        logout();
    }
    return (
        <>
            <h1>Bienvenido: { name }</h1>
            
            <button className='button' onClick={handleLogout} >cerrar sesion</button>
        </>
    );
}

export default Next;
