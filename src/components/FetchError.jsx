import { Link } from "react-router-dom";
import image from "../assets/images/error-image.png";
import "../styles/components/FetchError.css";

export default function FetchError() {
  return (
    <div className="fetch-error-wrapper">
      <img src={image} alt="a dog focused on the head, with a sad face." />
      <h3>
        Oops, it seems like we are having problems with our servers. We are
        already working on it. Please try again in a few minutes.
      </h3>
      <Link className="link-button" to="/">
        Go back to the home page
      </Link>
    </div>
  );
}
