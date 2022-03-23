import topImage from "../assets/images/orders-items-top.png";
import bottomImage from "../assets/images/orders-items-bottom.png";

export default function OrdersItem() {
  return (
    <section>
      <h3>Here are your package details:</h3>
      <ul>
        <li>Parcel ID:</li>
        <li>Status:</li>
        <li>Estimated Time of Arrival:</li>
        <li>Sender:</li>
        <li>Notes</li>
      </ul>
      <img src={topImage} alt="a dog lying, almost sleeping" />
      <h3>Location Details:</h3>
      <ul>
        <li>Location Name:</li>
        <li>Location Coordinates:</li>
      </ul>
      <div>GOOGLE MAPS API</div>
      <ul>
        <li>Last Updated:</li>
      </ul>
      <img
        src={bottomImage}
        alt="A dog sitting wearing a black colar seen from the side"
      />
    </section>
  );
}
