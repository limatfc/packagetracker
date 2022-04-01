import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomeFormInput from "./HomeFormInput";
import "../styles/components/HomeForm.css";
import { useState } from "react";

export default function HomeForm({ loginHandler, inputedDataHandler }) {
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  function onSubmitHandler(event) {
    event.preventDefault();
    loginHandler();
    navigate("/orders");
  }

  function formValidation(valueIsValid) {
    setFormIsValid(valueIsValid);
  }

  return (
    <form onSubmit={onSubmitHandler} className="form-wrapper">
      <h3>{t("home:instructions")}</h3>
      <HomeFormInput
        inputedDataHandler={inputedDataHandler}
        formValidation={formValidation}
      />

      <button className="label submit" type="submit" disabled={!formIsValid}>
        {t("home:buttonLabel")}
      </button>
    </form>
  );
}
