import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user/user_context";
import AuthContext from "../../context/auth/auth_context";

const Menu = () => {
    const { logout } = useContext(AuthContext);
    const { name } = useContext(UserContext);
    const handleLogout = () => {
      logout();
    };
    return (
      <>
        <nav id="nav">
          <a href="#sobre-nosotros">Acerca de</a>
          <a href="#portafolio">Portafolio</a>
          <a href="#servicios">Servicios</a>
          <a href="#footer">Contacto</a>
          <a onClick={handleLogout} style={{ cursor: "pointer" }}>
            cerrar sesion
          </a>
        </nav>
      </>
    );
}

export default Menu;