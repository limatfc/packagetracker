import { useState } from "react";

import OrdersItemDetails from "./OrdersItemDetails";

import "../styles/components/OrdersItem.css";

export default function OrdersItem({ item }) {
  const [showItemDetails, setShowItemDetails] = useState(false);

  const status = item.status.replace(/-/g, " ");

  function onClickHandler() {
    setShowItemDetails(!showItemDetails);
  }

  return (
    <div className="item-wrapper">
      <button
        className="capitalize label toggle-button"
        onClick={onClickHandler}
      >
        <span>Parcel ID: {item.parcel_id}</span> <span>{status}</span>
      </button>
      {showItemDetails && <OrdersItemDetails item={item} />}
    </div>
  );
}
