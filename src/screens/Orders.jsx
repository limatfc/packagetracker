import { useNavigate } from "react-router-dom";
import useFetchedDataHandler from "../hooks/use-fetched-data-handler";
import headerImage from "../assets/images/orders-header.png";
import Error from "../components/Error";
import Loading from "../components/Loading";
import OrdersItem from "../components/OrdersItem";

export default function Orders({ showOrdersScreenHandler }) {
  const navigate = useNavigate();
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
  const { fetchedData, isLoading, fetchError } = useFetchedDataHandler(url);

  if (isLoading) return <Loading />;
  if (fetchError) return <Error />;

  function onClickHandler() {
    showOrdersScreenHandler();
    navigate("/");
  }

  return (
    <section>
      <img
        src={headerImage}
        alt="a white dog sitting up, with its front legs in the air"
      />
      <h2>Welcome, Fulano</h2>
      <OrdersItem />
      <button onClick={onClickHandler}>Go back</button>
    </section>
  );
}
