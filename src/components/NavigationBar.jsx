import { Link } from "react-router-dom";
import i18n from "../i18nextConf";
import logo from "../assets/icons/logo.png";
import "../styles/components/NavigationBar.css";

export default function NavigationBar() {
  function onChangeHandler(event) {
    let language = event.target.value;
    if (language === "en") {
      i18n.changeLanguage("en");
    }
    if (language === "es") {
      i18n.changeLanguage("es");
    }
    if (language === "pt") {
      i18n.changeLanguage("pt");
    }
  }

  return (
    <section className="navigation-wrapper">
      <Link className="button-navigation positioning" to="/">
        <img
          src={logo}
          alt="A black dachshund standing up, looked from the side."
        />
        <span className="button-navigation">DachsHunt</span>
      </Link>
      <Link className="button-navigation margin" to="/about">
        About us
      </Link>
      <Link className="button-navigation" to="/faq">
        FAQ
      </Link>
      <select onChange={onChangeHandler}>
        <option value="en">English</option>
        <option value="es">Svenska</option>
        <option value="pt">Português</option>
      </select>
    </section>
  );
}
