import { useEffect } from "react";
import useFormValidation from "../hooks/use-form-validation";
import "../styles/components/HomeFormInput.css";

export default function HomeFormInput({
  enteredValuesHandler,
  formValidation,
}) {
  const {
    inputedValue,
    valueIsValid,
    isFocused,
    valueChangeHandler,
    valueFocusHandler,
  } = useFormValidation((value) => value.trim().length === 9 && value > 0);

  useEffect(() => {
    enteredValuesHandler(inputedValue);
  }, [enteredValuesHandler, inputedValue]);

  useEffect(() => {
    formValidation(valueIsValid);
  }, [formValidation, valueIsValid]);

  return (
    <div className="input-wrapper">
      <label className="label-wrapper">
        Phone number
        <input
          type="number"
          placeholder="76 090 3456"
          onChange={valueChangeHandler}
          onFocus={valueFocusHandler}
        />
        <small>
          {isFocused && "To have the full experience, enter 729478015."}
        </small>
      </label>
    </div>
  );
}
