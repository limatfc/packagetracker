import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import "../styles/components/NavigationBar.css";

// good
export default function NavigationBar() {
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
    </section>
  );
}
