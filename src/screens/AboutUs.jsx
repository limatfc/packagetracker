import image from "../assets/images/about-image.png";
import "../styles/screens/AboutUs.css";

// good (but ideal candidate to have trasnlated)
export default function AboutUs() {
  return (
    <section className="about-wrapper">
      <h2>About us</h2>
      <p>
        Founded in 2022, DachsHunt is a Sweden-based tech company with the
        mission to make online shopping easier. Through our extensive network of
        parcel lockers and home delivery services, DachsHunt serves a great
        number of people in both Sweden and Brazil.
      </p>
      <p>
        Our unique DachsHunt culture helps us relentlessly pursue our mission of
        being Earth’s most customer-centric company, best employer, and safest
        place to work. Also, we have made the commitment to better the lives of
        the greatest number of people possible though our services.{" "}
      </p>
      <img src={image} alt="a white dog walking, wearing black sunglasses" />
    </section>
  );
}
