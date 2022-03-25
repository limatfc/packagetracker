import dateConverter from "../scripts/date-converter";
import OrdersItemMap from "./OrdersItemMap";
import bottomImage from "../assets/images/orders-items-bottom.png";

export default function OrdersItemDetails({ item }) {
  const eta = dateConverter(item.eta);
  const lastUpdated = dateConverter(item.last_updated);

  const verificationRequirenment = item.verification_required
    ? "requires"
    : "doesn't require";

  const locationStatusMessage = item.location_status_ok
    ? "Your package has been registered and is ready to be picked up"
    : "Your package is waiting for registration";

  return (
    <section className="item-details-wrapper">
      <h3>Here are your package details:</h3>
      <ul>
        <li>Estimated Time of Arrival: {eta}</li>
        <li>Sender: {item.sender}</li>
        <li>Receiver: {item.user_name}</li>
        <li>Notes: {item.notes}</li>
      </ul>
      <h3 className="location-status">{locationStatusMessage}</h3>
      <h3>Location Details:</h3>
      <ul className="location-wrapper">
        <li className="text-row">Location Name: {item.location_name}</li>
        <li className="text-row second">
          This location {verificationRequirenment} verification
        </li>
        <li className="text-row third">Location Coordinates:</li>
        <li className="map-wrapper">
          <OrdersItemMap
            latitute={item.location_coordinate_latitude}
            longitute={item.location_coordinate_longitude}
          />
        </li>
      </ul>
      <span>Last Updated: {lastUpdated}</span>
      <img
        src={bottomImage}
        alt="A dog sitting wearing a black colar seen from the side"
      />
      <hr />
    </section>
  );
}
