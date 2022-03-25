import { useNavigate } from "react-router-dom";
import useFetchedDataHandler from "../hooks/use-fetched-data-handler";
import filterByPhoneNumber from "../scripts/filter-by-phone-number";
import sortByStatus from "../scripts/sort-by-status";
import headerImage from "../assets/images/orders-header.png";
import FetchError from "../components/FetchError";
import Loading from "../components/Loading";
import OrdersItem from "../components/OrdersItem";
import OrdersRouteError from "../components/OrdersRouteError";
import OrdersItemError from "../components/OrdersItemError";
import "../styles/screens/Orders.css";

export default function Orders({ enteredPhone, showOrdersScreen }) {
  const navigate = useNavigate();
  const { fetchedData, fetchStatus } = useFetchedDataHandler();

  if (fetchStatus === 0) return <Loading />;
  if (fetchStatus === 2) return <FetchError />;
  if (!showOrdersScreen) return <OrdersRouteError />;

  const filteredItems = filterByPhoneNumber(enteredPhone, fetchedData);

  if (filteredItems.length === 0)
    return <OrdersItemError enteredPhone={enteredPhone} />;

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
        <h2>Welcome!</h2>
        <h3>
          There are {sortedItems.length} parcels registered to this number
        </h3>
      </header>
      {ordersItem}
      <button className="label go-back-button" onClick={() => navigate("/")}>
        Go back
      </button>
    </section>
  );
}
