import { useNavigate } from "react-router-dom";
import useFetchedDataHandler from "../hooks/use-fetched-data-handler";
import dataManager from "../scripts/data-manager";
import headerImage from "../assets/images/orders-header.png";
import Error from "../components/Error";
import Loading from "../components/Loading";
import OrdersItem from "../components/OrdersItem";
import OrdersRouteError from "../components/OrdersRouteError";
import OrdersItemError from "../components/OrdersItemError";

export default function Orders({
  showOrdersScreenHandler,
  enteredPhone,
  showOrdersScreen,
}) {
  const navigate = useNavigate();

  const { fetchedData, fetchStatus } = useFetchedDataHandler();

  function onClickHandler() {
    showOrdersScreenHandler(false);
    navigate("/");
  }
  if (fetchStatus === 0) return <Loading />;
  if (fetchStatus === 2) return <Error />;
  if (!showOrdersScreen) return <OrdersRouteError />;

  const filteredItem = dataManager(enteredPhone, fetchedData);

  if (filteredItem.length === 0)
    return <OrdersItemError enteredPhone={enteredPhone} />;

  const ordersItem = filteredItem.map((item) => (
    <OrdersItem item={item} key={item.id} />
  ));

  return (
    <section>
      <img
        src={headerImage}
        alt="a white dog sitting up, with its front legs in the air"
      />
      <h2>Welcome</h2>
      {ordersItem}
      <button onClick={onClickHandler}>Go back</button>
    </section>
  );
}
