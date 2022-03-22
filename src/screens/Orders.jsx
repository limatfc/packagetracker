import useFetchedDataHandler from "../hooks/use-fetched-data-handler";
import headerImage from "../assets/images/orders-header.png";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function Orders() {
  const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";

  const { fetchedData, isLoading, fetchError } = useFetchedDataHandler(url);

  if (isLoading) return <Loading />;
  if (fetchError) return <Error />;
  return (
    <section>
      <img
        src={headerImage}
        alt="a white dog sitting up, with its front legs in the air"
      />
      <h2>Welcome, Fulano</h2>

      <button>Go back</button>
    </section>
  );
}
