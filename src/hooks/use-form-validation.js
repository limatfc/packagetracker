import { useState } from "react";

export default function useFormValidation(validationFunction) {
  const [inputedValue, setInputedValue] = useState("");

  const valueIsValid = validationFunction(inputedValue);

  function valueChangeHandler(event) {
    setInputedValue(event.target.value);
  }

  return {
    inputedValue,
    valueIsValid,
    valueChangeHandler,
  };
}
