import { Link } from "react-router-dom";
import image from "../assets/images/error-image.png";
import "../styles/components/Error.css";

export default function Error({ message }) {
  return (
    <div className="error-wrapper">
      <img src={image} alt="a dog focused on the head, with a sad face." />
      <h3>{message}</h3>
      <Link className="link-button" to="/">
        Go back to the home page
      </Link>
    </div>
  );
}
