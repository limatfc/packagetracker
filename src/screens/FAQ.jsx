import faqData from "../data/FAQ.json";
import image from "../assets/images/FAQ-image.png";
import "../styles/screens/FAQ.css";

export default function AboutUs() {
  const questionsContent = faqData.map((item) => {
    return (
      <div className="content-wrapper">
        <h3>{item.question}</h3>
        <p>{item.answer}</p>
        <img src={image} alt="a white dog standing up" />
        <hr />
      </div>
    );
  });

  return (
    <section className="faq-wrapper">
      <h2>Frequent asked questions</h2>
      <div>{questionsContent}</div>
    </section>
  );
}
