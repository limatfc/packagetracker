import { useState } from "react";

export default function useFormValidation(validationFunction) {
  const [inputedValue, setInputedValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const valueIsValid = validationFunction(inputedValue);

  function valueChangeHandler(event) {
    setInputedValue(event.target.value);
  }

  function valueFocusHandler() {
    setIsFocused(true);
  }

  return {
    inputedValue,
    valueIsValid,
    valueChangeHandler,
    isFocused,
    valueFocusHandler,
  };
}
