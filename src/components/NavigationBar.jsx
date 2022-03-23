import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";

export default function NavigationBar() {
  return (
    <section>
      <label>
        <Link to="/">
          <img
            src={logo}
            alt="A black dachshund standing up, looked from the side."
          />
          DachsHunt
        </Link>
      </label>
      <Link>About us</Link>
      <Link>FAQ</Link>
    </section>
  );
}
