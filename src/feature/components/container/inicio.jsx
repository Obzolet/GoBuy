import React, { useContext, useState } from "react";
import UserContext from "../../context/user/user_context";
import AuthContext from "../../context/auth/auth_context";
import { datos } from "../../../common/datos_entorno";

const [datos, setdatos] = useState(datos)


let menu_nav_ini = true;
let inicio = true;
/*
function activar_inicio(){
    menu_nav_ini = true;
    inicio = true;
}
 
function desactivar_inicio(){
    menu_nav_ini = false;
    inicio = false;
}
*/
function Main_menu_nav() {
  if (menu_nav_ini) {
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
          <a onClick={handleLogout} style={{ cursor:"pointer"}}>cerrar sesion</a>
        </nav>
      </>
    );
  }
}

function Main_inicio() {

  if (inicio) {
    return (
      <>

        {/* SOBRE NOSOTROS */}
        <section id="sobre-nosotros">
          <h2 className="titulo">Nuestro producto</h2>

          <picture>
            <img src="img/ilustracion2.svg" />
          </picture>

          <article>
            <h3>
              <span>1</span> Los mejores productos
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              veniam eius aspernatur ad consequuntur aperiam minima sed dicta
              odit numquam sapiente quam eum, architecto animi pariatur, velit
              doloribus laboriosam ut.
            </p>
            <h3>
              <span>2</span> Los mejores productos
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              veniam eius aspernatur ad consequuntur aperiam minima sed dicta
              odit numquam sapiente quam eum, architecto animi pariatur, velit
              doloribus laboriosam ut.
            </p>
          </article>
        </section>

        {/* PORTAFOLIO */}
        <section id="portafolio">
          <h2 className="titulo">Portafolio</h2>
          <ul id="galeria-port">
            <li className="imagen-port">
              <a href="./view/tiempo_lleg.html">
                <picture>
                  <img src="img/img1.png" alt="" />
                </picture>
                <article className="hover-galeria">
                  <picture>
                    <img src="img/icono1.png" alt="" />
                  </picture>
                  <p>Tiempo de llegada</p>
                </article>
              </a>
            </li>

            <li className="imagen-port">
              <a href="./view/cupones.html">
                <picture>
                  <img src="img/img3.png" alt="" />
                </picture>
                <article className="hover-galeria">
                  <picture>
                    <img src="img/icono1.png" alt="" />
                  </picture>
                  <p>Cupones</p>
                </article>
              </a>
            </li>

            <li className="imagen-port">
              <a onClick={desactivar_inicio}>
                <picture>
                  <img src="img/img7.png" alt="" />
                </picture>
                <article className="hover-galeria">
                  <picture>
                    <img src="img/icono1.png" alt="" />
                  </picture>
                  <p>Productos</p>
                </article>
              </a>
            </li>

            <li className="imagen-port">
              <a href="./view/carrito.html">
                <picture>
                  <img src="img/img8.png" alt="" />
                </picture>
                <article className="hover-galeria">
                  <picture>
                    <img src="img/icono1.png" alt="" />
                  </picture>
                  <p>Carrito de compras</p>
                </article>
              </a>
            </li>
          </ul>
        </section>

        {/* Comentarios */}
        <section className="clientes contenedor">
          <h2 className="titulo">Que dicen nuestros clientes</h2>
          <ul className="cards">
            <li className="card">
              <picture>
                <img src="img/cara_1.png" alt="" />
              </picture>
              <article className="contenido-texto-card">
                <h4>Name</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, sapiente!
                </p>
              </article>
            </li>
            <li className="card">
              <picture>
                <img src="img/cara_2.png" alt="" />
              </picture>
              <article className="contenido-texto-card">
                <h4>Name</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Vitae, sapiente!
                </p>
              </article>
            </li>
          </ul>
        </section>

        {/* Servicios */}
        <section id="servicios">
          <h2 className="titulo">Nuestros servicios</h2>
          <ul id="servicio-cont">
            <li className="servicio-ind">
              <picture>
                <img src="img/ilustracion1.svg" alt="" />
              </picture>
              <h3>Publica los objetos que quieras</h3>
              <p>Podras agregar productos que quieras prestar o vender</p>
            </li>
            <li className="servicio-ind">
              <picture>
                <img src="img/ilustracion4.svg" alt="" />
              </picture>
              <h3>Facil contacto</h3>
              <p>
                La persona que esté interesado en tu producto te contactara o te
                hara un propuesta para llegar a un acuerdo
              </p>
            </li>
            <li className="servicio-ind">
              <picture>
                <img src="img/ilustracion3.svg" alt="" />
              </picture>
              <h3>Compras y ventas de manera sencilla</h3>
              <p>Al final todo se reducie en un combenio con la otra persona</p>
            </li>
          </ul>
        </section>
      </>
    );
  }
}

const Inicio = () => {



    const activar_inicio = () => {
        menu_nav_ini = true;
        inicio = true;
    }

  return (
    <>
      {/*  */}
      {/* <button classNameName="button" onClick={handleLogout}>cerrar sesion</button> */}

      {/* Diseño del encabezado */}
      <header id="header">
        {Main_menu_nav()}
        <section id="textos-header" onClick={activar_inicio} style={{ cursor:"pointer"}}>
          <h1>GoBuy</h1>
          <h2>Página web de cambio y venta de objetos</h2>
        </section>

        <picture id="wave" style={{ height: "150px", overflow: "hidden" }}>
          {/* esto ayuda hacer la forma undulada No esta fuincionando */}
          {/*
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                    style="stroke: none; fill: #fff;">
                </path>
            </svg>
            */}
        </picture>
      </header>

      <main>
        {/* esto contiene todo el main de inicio */}
        {Main_inicio()}
      </main>

      {/* Pie de pagina */}
      <footer id="footer">
        <ul className="contenedor-footer">
          <li className="content-foo">
            <h4>Phone</h4>
            <p>301 542 7889</p>
          </li>
          <li className="content-foo">
            <h4>Email</h4>
            <p>metasoft@gmail.com</p>
          </li>
          <li className="content-foo">
            <h4>Location</h4>
            <p>Calle falsa #123</p>
          </li>
        </ul>
        <h2 className="titulo-final">
          &copy; Metasoft | Sofware de intercambios y ventas
        </h2>
      </footer>

      {/* Boton Gotop */}
      <div id="go-top-container" className="go-top-container">
        <div className="go-top-button">
          <img src="img/flecha-hacia-arriba.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Inicio;
