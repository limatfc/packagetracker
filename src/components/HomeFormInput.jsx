import { useEffect } from "react";
import useFormValidation from "../hooks/use-form-validation";
import "../styles/components/HomeFormInput.css";

// Coupling -1
// This component its tighly coupled, the very name HomeFormInput tells me that.
// Instead should be a Form that has an input field and that input field data should come from a json file
// The placeholder for the phone number should be a clue that its super coupled with the homepage
export default function HomeFormInput({ inputedDataHandler, formValidation }) {
  const {
    inputedValue,
    valueIsValid,
    isFocused,
    valueChangeHandler,
    valueFocusHandler,
  } = useFormValidation((value) => value.trim().length === 9 && value > 0);

  useEffect(() => {
    inputedDataHandler(inputedValue);
  }, [inputedDataHandler, inputedValue]);

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
