import { useState } from "react";

const UseValidateForm = () => {
    const [isValid, setIsValid] = useState(true);

    const validateFields = (fields) => {
      const isEmpty = Object.values(fields).some((value) => value === "");
     
      setIsValid( !isEmpty );
      return !isEmpty ;
    };
  
    return { validateFields };
}

export default UseValidateForm;


