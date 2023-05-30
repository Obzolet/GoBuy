import { useState, useEffect } from "react";

const useMessage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [timer, setTimer] = useState(null);

  const showErrorMessage = (message, duration = 2000) => {
    setErrorMessage(message);
    setShowError(true);
    clearTimer();
    setTimer(setTimeout(hideMessage, duration));
  };

  const showSuccessMessage = (message, duration = 2000) => {
    setSuccessMessage(message);
    setShowSuccess(true);
    clearTimer();
    setTimer(setTimeout(hideMessage, duration));
  };

  const hideMessage = () => {
    setShowError(false);
    setErrorMessage("");
    setShowSuccess(false);
    setSuccessMessage("");
    clearTimer();
  };

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return {
    errorMessage,
    showError,
    successMessage,
    showSuccess,
    showErrorMessage,
    showSuccessMessage,
    hideMessage,
  };
};

export default useMessage;
