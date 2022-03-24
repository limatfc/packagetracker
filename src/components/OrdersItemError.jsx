import { Link } from "react-router-dom";
import image from "../assets/images/error-image.png";
import "../styles/components/OrdersItemError.css";

export default function OrdersItemError({ enteredPhone }) {
  return (
    <div className="orders-item-error-wrapper">
      <img src={image} alt="a dog focused on the head, with a sad face." />
      <h3>
        Oops, It looks like the entered telephone number does not have any
        parcels to receive.
      </h3>
      <h3>Please check if the number {enteredPhone} is correct.</h3>
      <Link className="link-button" to="/">
        Go back to the home page
      </Link>
    </div>
  );
}
