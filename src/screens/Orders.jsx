import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetchedDataHandler from "../hooks/use-fetched-data-handler";
import filterByPhoneNumber from "../scripts/filter-by-phone-number";
import sortByStatus from "../scripts/sort-by-status";
import headerImage from "../assets/images/orders-header.png";
import Loading from "../components/Loading";
import OrdersItem from "../components/OrdersItem";
import Error from "../components/Error";
import errorMessage from "../data/error-messages.json";
import "../styles/screens/Orders.css";

export default function Orders({ enteredPhone, isLoggedIn }) {
  const navigate = useNavigate();
  const { fetchedData, fetchStatus } = useFetchedDataHandler();
  const { t } = useTranslation();

  // Althouth this safeguards are well coded, this could have been done in other part of the app to make it more modular
  if (fetchStatus === 0) return <Loading />;
  if (fetchStatus === 2) return <Error message={errorMessage.fetch} />;
  if (!isLoggedIn) return <Error message={errorMessage.ordersRoute} />;

  const filteredItems = filterByPhoneNumber(enteredPhone, fetchedData);

  if (filteredItems.length === 0)
    return (
      <Error message={errorMessage.ordersItem} enteredPhone={enteredPhone} />
    );

  const sortedItems = sortByStatus(filteredItems);

  const ordersItem = sortedItems.map((item) => (
    <OrdersItem item={item} key={item.id} />
  ));

  return (
    <section className="orders-wrapper">
      <header className="orders-header">
        <img
          src={headerImage}
          alt="a white dog sitting up, with its front legs in the air"
        />
        <h2>{t("orders:title")}</h2>
        <h3>
          {`${t("orders:subtitlePart1")} ${sortedItems.length} ${t(
            "orders:subtitlePart2"
          )}`}
        </h3>
      </header>
      {ordersItem}
      <button className="label go-back-button" onClick={() => navigate("/")}>
        {t("orders:goBackButton")}
      </button>
    </section>
  );
}
