import { Link } from "react-router-dom";
import image from "../assets/images/error-image.png";
import "../styles/components/OrdersRouteError.css";

export default function OrdersRouteError() {
  return (
    <section className="orders-route-error-wrapper">
      <img src={image} alt="a dog focused on the head, with a sad face." />
      <h3>
        Oops, it looks like you are trying to access a page that requires
        sensitive data.
      </h3>
      <h3>
        To solve this problem, you need to go back to our home page and insert a
        telephone number.
      </h3>
      <Link className="link-button" to="/">
        Go back to the home page
      </Link>
    </section>
  );
}
