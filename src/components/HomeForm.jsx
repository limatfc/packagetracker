import { useNavigate } from "react-router-dom";

import HomeFormInput from "./HomeFormInput";
import "../styles/components/HomeForm.css";
import { useState } from "react";

export default function HomeForm({
  showOrdersScreenHandler,
  enteredValuesHandler,
}) {
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();

  function onSubmitHandler(event) {
    event.preventDefault();
    showOrdersScreenHandler();
    navigate("/orders");
  }

  function formValidation(valueIsValid) {
    setFormIsValid(valueIsValid);
  }

  return (
    <form onSubmit={onSubmitHandler} className="form-wrapper">
      <h3>
        Insert a phone number on the field on the right and quickly check out
        all the packages registered to it.
      </h3>
      <HomeFormInput
        enteredValuesHandler={enteredValuesHandler}
        formValidation={formValidation}
      />

      <button className="label submit" type="submit" disabled={!formIsValid}>
        Track
      </button>
    </form>
  );
}
