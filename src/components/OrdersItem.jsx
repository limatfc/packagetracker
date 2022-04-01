import { useState } from "react";
import { useTranslation } from "react-i18next";
import OrdersItemDetails from "./OrdersItemDetails";

import "../styles/components/OrdersItem.css";

// excellent
export default function OrdersItem({ item }) {
  const [showItemDetails, setShowItemDetails] = useState(false);
  const { t } = useTranslation();
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
        <span>
          {t("orders:itemButton")} {item.parcel_id}
        </span>
        <span>{status}</span>
      </button>
      {showItemDetails && <OrdersItemDetails item={item} />}
    </div>
  );
}
