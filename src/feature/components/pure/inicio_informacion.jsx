import React from 'react';
import { useNavigate } from 'react-router-dom';


const Informacion = () => {

  const route = useNavigate();
  const GoCart = () => {
    route('/carrito');
  };
  const handleGoCart = () => {
    route('/productos');
  };

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

            <li className="imagen-port" >
              <a onClick={handleGoCart} >
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
              <a onClick={GoCart}>
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

export default Informacion;
