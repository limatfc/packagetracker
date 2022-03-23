import { Link } from "react-router-dom";

export default function OrdersRouteError() {
  return (
    <section>
      <h2>
        Oops, it looks like you are trying to access a page that requires some
        data. To solve this problem, you need to go back to our home page and
        insert either your parcel ID or your telephone number.
      </h2>
      <Link to="/">Go back to the home page</Link>
    </section>
  );
}
