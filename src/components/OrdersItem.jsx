import topImage from "../assets/images/orders-items-top.png";
import bottomImage from "../assets/images/orders-items-bottom.png";

export default function OrdersItem({ item }) {
  const verificationRequirenment = item.verification_required
    ? "requires"
    : "doesn't require";

  const locationStatusMessage = item.location_status_ok
    ? "Your package has been registered and is ready to be picked up"
    : "Your package is waiting for registration";

  return (
    <section>
      <h3>Here are your package details:</h3>
      <ul>
        <li>Status: {item.status}</li>
        <li>Estimated Time of Arrival: {item.eta}</li>
        <li>Parcel ID: {item.parcel_id}</li>
        <li>Sender: {item.sender}</li>
        <li>Receiver: {item.user_name}</li>
        <li>Notes</li>
      </ul>
      <img src={topImage} alt="a dog lying, almost sleeping" />
      <h3>{locationStatusMessage}</h3>
      <h3>Location Details:</h3>
      <ul>
        <li>Location Name: {item.location_name}</li>
        <li>It {verificationRequirenment} verification</li>
        <li>Location Coordinates:</li>
      </ul>
      <div>GOOGLE MAPS API</div>
      <ul>
        <li>Last Updated: {item.last_updated}</li>
      </ul>
      <img
        src={bottomImage}
        alt="A dog sitting wearing a black colar seen from the side"
      />
      <hr />
    </section>
  );
}
