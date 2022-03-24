import dateConverter from "../scripts/date-converter";
import bottomImage from "../assets/images/orders-items-bottom.png";
import OrdersItemMap from "./OrdersItemMap";
import "../styles/components/OrdersItem.css";

export default function OrdersItem({ item }) {
  const verificationRequirenment = item.verification_required
    ? "requires"
    : "doesn't require";

  const locationStatusMessage = item.location_status_ok
    ? "Your package has been registered and is ready to be picked up"
    : "Your package is waiting for registration";

  const status = item.status.replace(/-/g, " ");

  const eta = dateConverter(item.eta);
  const lastUpdated = dateConverter(item.last_updated);

  return (
    <section className="orders-item-wrapper">
      <h2>Package number {item.id}</h2>
      <h3>Here are your package details:</h3>
      <ul>
        <li className="capitalize">Status: {status}</li>
        <li>Estimated Time of Arrival: {eta}</li>
        <li>Parcel ID: {item.parcel_id}</li>
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
      <ul>
        <li>Last Updated: {lastUpdated}</li>
      </ul>
      <img
        src={bottomImage}
        alt="A dog sitting wearing a black colar seen from the side"
      />
      <hr />
    </section>
  );
}
