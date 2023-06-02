
import React, { useState } from 'react';
import AuthContext from './auth_context';
import { Status } from '../../../common/status.enum';

const AuthProvider = ({children}) => {
    let statusLogin = Status.LOGGED_OUT;
    // se crea como falsa para que se redireccione automaticamente al login
    const [authenticated, setAuthenticated] = useState(statusLogin);
    console.log('sesion: ', authenticated)
   
    const login = ()=> {
        statusLogin = Status.LOGGED_IN;
        
        setAuthenticated(statusLogin);
        console.log('iniciando sesion: ',statusLogin);
    }
    const logout = () => {
        statusLogin = Status.LOGGED_OUT;
        setAuthenticated(statusLogin);
        console.log('cerrando sesion: ',statusLogin);
    }
    return (
        <>
            <AuthContext.Provider value={{ authenticated,login,logout }} >
                { children }
            </AuthContext.Provider>   
        </>
    );
}

export default AuthProvider;
