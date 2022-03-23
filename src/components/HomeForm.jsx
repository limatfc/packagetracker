import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFormValidation from "../hooks/use-form-validation";
import HomeFormInput from "./HomeFormInput";
import "../styles/components/HomeForm.css";

export default function HomeForm({
  showOrdersScreenHandler,
  enteredValuesHandler,
}) {
  const navigate = useNavigate();

  const {
    inputedValue: phoneInputedValue,
    valueIsValid: phoneIsValid,
    valueChangeHandler: phoneChangeHandler,
  } = useFormValidation((value) => value.trim().length === 9 && value > 0);

  useEffect(() => {
    enteredValuesHandler(phoneInputedValue);
  }, [enteredValuesHandler, phoneInputedValue]);

  function onSubmitHandler(event) {
    event.preventDefault();
    showOrdersScreenHandler();
    navigate("/orders");
  }

  let formIsValid = "initialState";
  if (!phoneIsValid) formIsValid = false;

  return (
    <form onSubmit={onSubmitHandler} className="form-wrapper">
      <h3>Please enter a Parcel ID or your phone number</h3>
      <HomeFormInput
        valueChangeHandler={phoneChangeHandler}
        placeholder="76 090 3456"
      >
        Phone number
      </HomeFormInput>
      <button className="label submit" type="submit" disabled={!formIsValid}>
        Track
      </button>
    </form>
  );
}
