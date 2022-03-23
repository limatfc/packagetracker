import homeImage from "../assets/images/home-image.png";
import "../styles/screens/Home.css";

export default function Home() {
  return (
    <div>
      <section className="hero-wrapper">
        <h1>DachsHunt</h1>
        <h1>We hunt your package as if it were a badger.</h1>
      </section>
      <section className="home-body-wrapper">
        <h3>Please enter a Parcel ID or your phone number</h3>
        <label>
          Parcel ID
          <input type="number" />
        </label>
        <label>
          Phone number
          <input type="number" />
        </label>
        <button>Track</button>
        <img src={homeImage} alt="a white dog sniffing the footer" />
      </section>
    </div>
  );
}
