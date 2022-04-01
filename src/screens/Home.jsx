import { useTranslation } from "react-i18next";
import homeImage from "../assets/images/home-image.png";
import HomeForm from "../components/HomeForm";
import "../styles/screens/Home.css";

// Naming -1 The argument names are too long, that's why Prettier are moving them to 2 lines
export default function Home({ loginHandler, inputedDataHandler }) {
  const { t } = useTranslation();

  return (
    <div className="home-wrapper">
      <section className="hero-wrapper">
        <h1>DachsHunt</h1>
        <h1 className="slogan">{t("home:slogan")}</h1>
      </section>
      <HomeForm
        loginHandler={loginHandler}
        inputedDataHandler={inputedDataHandler}
      />
      <img src={homeImage} alt="a white dog sniffing the footer" />
    </div>
  );
}
