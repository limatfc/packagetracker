import { useState } from "react";

import OrdersItemDetails from "./OrdersItemDetails";

import "../styles/components/OrdersItem.css";

export default function OrdersItem({ item }) {
  const [show, setShow] = useState(false);

  const status = item.status.replace(/-/g, " ");

  const osClickHandler = () => {
    setShow(!show);
  };

  return (
    <div className="item-wrapper">
      <button
        className="capitalize label toggle-button"
        onClick={osClickHandler}
      >
        <span>Parcel ID: {item.parcel_id}</span> <span>{status}</span>
      </button>
      {show && <OrdersItemDetails item={item} />}
    </div>
  );
}
