
import { useState } from 'react';
import UserContext from './user_context';

const UserProvider = ({children}) => {
    const [name, setName] = useState('');
    
    const setNameContext = (value) =>{
        setName(value)
    }
    return (
        <>
            <UserContext.Provider value={{name,setNameContext}} >
                {children}
            </UserContext.Provider>   
        </>
    );
}

export default UserProvider;
