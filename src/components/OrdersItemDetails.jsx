import { useTranslation } from "react-i18next";
import dateConverter from "../scripts/date-converter";
import OrdersItemMap from "./OrdersItemMap";
import bottomImage from "../assets/images/orders-items-bottom.png";

export default function OrdersItemDetails({ item }) {
  const eta = dateConverter(item.eta);
  const lastUpdated = dateConverter(item.last_updated);
  const { t } = useTranslation();

  const verificationRequirenment = item.verification_required
    ? t("orders:ordersItemDetails:positiveVerificationRequirenment")
    : t("orders:ordersItemDetails:negativeVerificationRequirenment");

  const locationStatusMessage = item.location_status_ok
    ? t("orders:ordersItemDetails:positiveLocationStatusMessage")
    : t("orders:ordersItemDetails:negativeLocationStatusMessage");

  return (
    <section className="item-details-wrapper">
      <h3>{t("orders:ordersItemDetails:title")}</h3>
      <ul>
        <li>
          {t("orders:ordersItemDetails:detail1")} {eta}
        </li>
        <li>
          {t("orders:ordersItemDetails:detail2")} {item.sender}
        </li>
        <li>
          {t("orders:ordersItemDetails:detail3")} {item.user_name}
        </li>
        <li>
          {t("orders:ordersItemDetails:detail4")} {item.notes}
        </li>
      </ul>
      <h3 className="location-status">{locationStatusMessage}</h3>
      <h3>{t("orders:ordersItemDetails:locationDetails")}</h3>
      <ul className="location-wrapper">
        <li className="text-row">
          {t("orders:ordersItemDetails:locationName")} {item.location_name}
        </li>
        <li className="text-row second">{verificationRequirenment}</li>
        <li className="text-row third">
          {t("orders:ordersItemDetails:locationCoordinates")}
        </li>
        <li className="map-wrapper">
          <OrdersItemMap
            latitute={item.location_coordinate_latitude}
            longitute={item.location_coordinate_longitude}
          />
        </li>
      </ul>
      <span>
        {t("orders:ordersItemDetails:lastUpdated")} {lastUpdated}
      </span>
      <img
        src={bottomImage}
        alt="A dog sitting wearing a black colar seen from the side"
      />
      <hr />
    </section>
  );
}
