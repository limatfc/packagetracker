import { useNavigate } from "react-router-dom";
import useFetchedDataHandler from "../hooks/use-fetched-data-handler";
import headerImage from "../assets/images/orders-header.png";
import Error from "../components/Error";
import Loading from "../components/Loading";
import OrdersItem from "../components/OrdersItem";

export default function Orders({ showOrdersScreenHandler, enteredValues }) {
  const navigate = useNavigate();

  const { fetchedData, fetchStatus } = useFetchedDataHandler();

  if (fetchStatus === 0) return <Loading />;
  if (fetchStatus === 2) return <Error />;

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
