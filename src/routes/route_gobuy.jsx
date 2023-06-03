import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from '../feature/components/container/login';
import RegistrationAuth from '../feature/components/container/registration_auth';
import Productos from '../../src/feature/components/container/productos'
import Next from '../feature/components/container/next';
import Inicio from '../feature/components/container/inicio';
import AuthContext from '../feature/context/auth/auth_context';
import { Status } from '../common/status.enum';
import { useContext } from 'react';
import Cart from '../feature/components/pure/carrito';

  const RouteGobuy = () => {
    const { authenticated } = useContext(AuthContext);
    return (

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/registro" element={<RegistrationAuth />} />
  
              { authenticated === Status.LOGGED_IN ? (
                <>
                //<Route path="next/" element={<Next></Next>} />
                <Route path="/inicio" element={<Inicio/>} />
                <Route path="/productos" element={<Productos />} />
                <Route path='/carrito' element = {<Cart></Cart>}></Route>
                </>
              ) : (
                // Redirigir a la página de inicio de sesión si no está autenticado
                <>
                <Route path="/inicio" element={<Navigate to="/" replace />} />
                <Route path="/productos" element={<Navigate to="/" replace />} />
                </>
              )}
              
            </Routes>
          </BrowserRouter>

    );
  };
export default RouteGobuy;
