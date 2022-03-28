import { useState } from "react";

// The code itself is good, but it was not neccesary at all
export default function useFormValidation(validationFunction) {
  const [inputedValue, setInputedValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validationFunction(inputedValue);
  const hasError = isTouched && !valueIsValid;

  function valueChangeHandler(event) {
    setInputedValue(event.target.value);
  }

  function valueBlurHandler() {
    setIsTouched(true);
  }

  return {
    inputedValue,
    valueIsValid,
    valueChangeHandler,
    hasError,
    valueBlurHandler,
  };
}
