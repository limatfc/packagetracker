import homeImage from "../assets/images/home-image.png";
import "../styles/screens/Home.css";

export default function Home() {
  function onParcelIDHandler() {}

  return (
    <div>
      <section className="hero-wrapper">
        <h1>DachsHunt</h1>
        <h1>We hunt your package as if it were a badger.</h1>
      </section>
      <form className="home-body-wrapper">
        <h3>Please enter a Parcel ID or your phone number</h3>
        <label>
          Parcel ID
          <input type="number" onChange={onParcelIDHandler} />
        </label>
        <h3>OR</h3>
        <label>
          Phone number
          <input type="number" />
        </label>
        <button type="submit">Track</button>
      </form>
      <img src={homeImage} alt="a white dog sniffing the footer" />
    </div>
  );
}
