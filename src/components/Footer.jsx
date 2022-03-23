import telephoneIcon from "../assets/icons/telephone.png";
import emailIcon from "../assets/icons/email.png";
import instagramIcon from "../assets/icons/instagram.png";
import facebookIcon from "../assets/icons/facebook.png";
import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <section className="footer-wrapper">
      <p> Contact us</p>
      <label>
        <img src={telephoneIcon} alt="a telefone icon with a arrow on top" />
        <small>+46 076 080 9234</small>
      </label>
      <label>
        <img src={emailIcon} alt="an envelope icon" />
        <small>dachshunt@dachshunt.com</small>
      </label>
      <p>Follow us</p>
      <a
        href="https://www.instagram.com/lima_fcthaisa/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagramIcon} alt="instagram icon" />
      </a>
      <a
        href="https://www.instagram.com/lima_fcthaisa/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebookIcon} alt="facebook icon" />
      </a>
    </section>
  );
}
