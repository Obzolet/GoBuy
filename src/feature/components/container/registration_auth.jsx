
import { Link, useNavigate } from 'react-router-dom';
import UseCreateUser from '../../hook/use_create_user';

import useMessage from '../../hook/use_message';
import UseValidateForm from '../../hook/use_validate_form';
import Message from '../pure/message';




const RegistrationAuth = () => {

  const { createUser } = UseCreateUser();
  const { validateFields } = UseValidateForm();
  const route = useNavigate();
  const {
    errorMessage,
    showError,
    successMessage,
    showSuccess,
    showErrorMessage,
    showSuccessMessage,
    hideMessage,
  } = useMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;
    
    const user = { name, email, password, confirmPassword };

    if (!validateFields( user )) {
      showErrorMessage("Por favor, complete todos los campos.");
      showSuccessMessage('');
      return;
    }
    if(password!==confirmPassword){
      showErrorMessage('Las contraseñas no coinciden');
      showSuccessMessage('');
      return;
    }else{
      await createUser(user);
      e.target.reset();
      showSuccessMessage("Te has registrado", 2000);
      // Esperar 2 segundos antes de redirigir al usuario a la página de inicio de sesión
       await new Promise((resolve) => setTimeout(resolve, 2000));

      //nos redirije al login
      route('/');
      };
    }

  const mssgStyle = showError ? "error-message" : showSuccess ? "success-message" : "";
  const showMssg = showError ? errorMessage : successMessage;
  const optionShowMssg = showError ? showError : showSuccess;
  const clearMssg = showError ? hideMessage : hideMessage;

  return (
    <>
      <header style={{ backgroundColor: "#A01BC4", margin: 0, padding: "20px", color: "#FFF" }}>Metasoft</header>
      <main className="contenedor">
        <form className="formulario" onSubmit={handleSubmit}>
          <h1>Registrate</h1>
          
         <Message mssgStyle={mssgStyle} showMssg={showMssg} optionShowMssg={optionShowMssg} clearMssg={clearMssg}></Message>
          <section className="input-contenedor">
            <input className="input-text" type="text" placeholder="Nombre Completo" name="name" />
          </section>

          <section className="input-contenedor">
            <input className="input-text" type="email" placeholder="Correo Electrónico" name="email" />
          </section>

          <section className="input-contenedor">
            <input className="input-text" type="password" placeholder="Contraseña" name="password" />
          </section>

          <section className="input-contenedor">
            <input className="input-text" type="password" placeholder="Confirmar Contraseña" name="confirmPassword" />
          </section>

          <button className="button" type="submit">
            Registrate
          </button>

          <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
          <p>
            ¿Ya tienes una cuenta? <br />
            <Link to="/" className="link">Iniciar Sesión</Link>
          </p>
        </form>
      </main>
    </>
  );
};

export default RegistrationAuth;
