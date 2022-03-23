import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../hooks/use-form-validation";
import HomeFormInput from "./HomeFormInput";

export default function HomeForm({
  showOrdersScreenHandler,
  enteredValuesHandler,
}) {
  const navigate = useNavigate();

  const {
    inputedValue: parcelInputedValue,
    valueIsValid: parcelIsValid,
    valueChangeHandler: parcelChangeHandler,
  } = useFormValidation((value) => value.trim().length === 4);

  const {
    inputedValue: phoneInputedValue,
    valueIsValid: phoneIsValid,
    valueChangeHandler: phoneChangeHandler,
  } = useFormValidation((value) => value.trim().length === 9);

  useEffect(() => {
    enteredValuesHandler(parcelInputedValue, phoneInputedValue);
  }, [enteredValuesHandler, parcelInputedValue, phoneInputedValue]);

  function onSubmitHandler(event) {
    event.preventDefault();
    showOrdersScreenHandler();
    navigate("/orders");
  }

  let formIsValid = "initialState";
  if (!phoneIsValid && !parcelIsValid) formIsValid = false;

  return (
    <form onSubmit={onSubmitHandler} className="form-wrapper">
      <h3>Please enter a Parcel ID or your phone number</h3>
      <HomeFormInput
        valueChangeHandler={parcelChangeHandler}
        placeholder="1234"
      >
        Parcel ID
      </HomeFormInput>
      <h3>OR</h3>
      <HomeFormInput
        valueChangeHandler={phoneChangeHandler}
        placeholder="76 090 3456"
      >
        Phone number
      </HomeFormInput>
      <button type="submit" disabled={!formIsValid}>
        Track
      </button>
    </form>
  );
}
