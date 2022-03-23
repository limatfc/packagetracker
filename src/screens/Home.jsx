import homeImage from "../assets/images/home-image.png";
import HomeForm from "../components/HomeForm";
import "../styles/screens/Home.css";

export default function Home({
  showOrdersScreenHandler,
  enteredValuesHandler,
}) {
  return (
    <div className="home-wrapper">
      <section className="hero-wrapper">
        <h1>DachsHunt</h1>
        <h1>We hunt your package as if it were a badger.</h1>
      </section>
      <HomeForm
        showOrdersScreenHandler={showOrdersScreenHandler}
        enteredValuesHandler={enteredValuesHandler}
      />
      <img src={homeImage} alt="a white dog sniffing the footer" />
    </div>
  );
}
