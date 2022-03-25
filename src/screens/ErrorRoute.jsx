import { Link } from "react-router-dom";
import image from "../assets/images/error-image.png";
import "../styles/screens/ErrorRoute.css";

export default function ErrorRoute() {
  return (
    <section className="error-route-wrapper">
      <img src={image} alt="a dog focused on the head, with a sad face." />
      <h3>Oops, it looks like this page does not exist.</h3>

      <Link className="link-button" to="/">
        Go back to the home page
      </Link>
    </section>
  );
}
