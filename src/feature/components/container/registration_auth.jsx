import { User } from '../../../model/user';
import UserService from '../../hook/user_service';

const RegistrationAuth = () => {
  const {
    setShowSuccess,
    successMessage,
    showSuccess,
    setShowError,
    errorMessage,
    showError,
    createUser,
  } = UserService();

  const mssgStyle = showError ? 'error-message' : showSuccess ? 'success-message' : '';
  const showMssg = showError ? errorMessage : successMessage;
  const optionShowMssg = showError ? showError : showSuccess;
  const clearMssg = showError ? () => setShowError(false) : () => setShowSuccess(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;
    const user = new User(name, email, password);
    createUser(user, confirmPassword);
    e.target.reset();
  };

  return (
  <>
    <header style={{ backgroundColor: '#A01BC4', margin: 0, padding: '20px', color: '#FFF' }}>Metasoft</header>
    <main className="contenedor">
      <form className="formulario" onSubmit={handleSubmit}>
        <h1>Registrate</h1>
        <span className={ 'message ' + mssgStyle }>
            <p>{showMssg}</p>
            {optionShowMssg && (
              <button onClick={ clearMssg }>Aceptar</button>
            )}
          </span>
          <section className="input-contenedor">
            <input  className="input-text" type="text"  placeholder="Nombre Completo"  name="name"/>
          </section>

          <section className="input-contenedor">
            <input className="input-text" type="email" placeholder="Correo Electrónico" name="email"/>
          </section>

          <section className="input-contenedor">
            <input className="input-text" type="password" placeholder="Contraseña" name="password"/>
          </section>

          <section className="input-contenedor">
            <input className="input-text" type="password" placeholder="Confirmar Contraseña" name="confirmPassword"/>
          </section>

          <button className="button" type='submit'>Registrate</button>

          <p>
            Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.
          </p>
          <p>
            ¿Ya tienes una cuenta? <br /> <a className="link" href="login.html"> Iniciar Sesión</a>
          </p>
      </form>
    </main>
      
  </>
    

    


  );
};

export default RegistrationAuth;
