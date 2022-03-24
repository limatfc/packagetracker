import { Link } from "react-router-dom";
import "../styles/components/OrdersItemError.css";

export default function OrdersItemError({ enteredPhone }) {
  return (
    <div className="orders-item-error-wrapper">
      <h2>
        It looks like the entered telephone number does not have any parcels to
        receive. Please check the number {enteredPhone} is correct.
      </h2>
      <Link to="/">Go back to the home page</Link>
    </div>
  );
}
