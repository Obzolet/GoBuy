

function Login() {
  return (
    <>
      <header style={{ backgroundColor: '#A01BC4', margin: 0, padding: '20px', color: '#FFF' }}>Metasoft</header>
      <fieldset className="contenedor">
        <form className="formulario">
          <h1>Login</h1>
          <section className="input-contenedor">
            <input className="input-text" type="text" placeholder="Correo Unal" />
          </section>
          <section className="input-contenedor">
            <input className="input-text" type="password" placeholder="Contraseña" />
          </section>
          <button className="button">Login</button>
          <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
          <p>¿No tienes una cuenta? <br /> <a className="link" href="registro.html">Registrate</a></p>
        </form>
      </fieldset>
    </>
  );
}

export default Login;
