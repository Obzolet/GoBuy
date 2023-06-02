import React, { useContext, useState } from "react";
import UseAuthUser from "../../hook/use_auth_user";
import UseValidateForm from "../../hook/use_validate_form";
import useMessage from "../../hook/use_message";
import Message from "../pure/message";
import { Link, useNavigate } from "react-router-dom";
import Header from "../pure/header";
import AuthContext from "../../context/auth/auth_context";




function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticateUser } = UseAuthUser();
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


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {

    const user = { email,password }
    e.preventDefault();
    if(!validateFields( user )){
      showErrorMessage('Por favor complete todos los campos');
      showSuccessMessage('');
      return;
    }
    const onSuccess = async () => {
     
      showSuccessMessage("Credenciales correctas");
      
      login();
      await new Promise((resolve) => setTimeout(resolve, 2000));
      route('/inicio')
    };

    const onFailure = () => {
      showErrorMessage("Credenciales incorrectas");
    };
    const authEmail = () =>{
      showErrorMessage("El usuario no existe");
    }

    authenticateUser(email, password,onSuccess,onFailure,authEmail);

    

  };

  const mssgStyle = showError ? "error-message" : showSuccess ? "success-message" : "";
  const showMssg = showError ? errorMessage : successMessage;
  const optionShowMssg = showError ? showError : showSuccess;
  const clearMssg = showError ? hideMessage : hideMessage;


  return (
    <>
     <Header></Header>
      <fieldset className="contenedor">
        <form className="formulario" onSubmit={handleLogin}>
          <h1>Login</h1>
          <Message mssgStyle={mssgStyle} showMssg={showMssg} optionShowMssg={optionShowMssg} clearMssg={clearMssg}></Message>
          <section className="input-contenedor">
            <input
              className="input-text"  type="email" placeholder="Correo Unal" value={email} onChange={handleEmailChange}
            />
          </section>
          <section className="input-contenedor">
            <input
              className="input-text" type="password" placeholder="Contraseña" value={password} onChange={handlePasswordChange}
            />
          </section>
          <button className="button" type="submit">Login</button>
          <p>Al registrarte, aceptas nuestras Condiciones de uso y Política de privacidad.</p>
          <p>
            ¿No tienes una cuenta? <br />
            <Link to="/registro" className="link">Registrate</Link>
          </p>
        </form>
      </fieldset>
    </>
  );
}

export default Login;
