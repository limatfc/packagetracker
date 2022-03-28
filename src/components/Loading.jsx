import "../styles/components/Loading.css";
import image from "../assets/images/loading-image.png";

// excellent
export default function Loading() {
  return (
    <section className="loading-wrapper">
      <img src={image} alt="a dog preparing to shake its body" />
      <h3>Wait, we are loading your data...</h3>
    </section>
  );
}
