import logo from "../assets/icons/logo.png";

export default function NavigationBar() {
  return (
    <section>
      <label>
        <img
          src={logo}
          alt="A black dachshund standing up, looked from the side."
        />
        <h3>DachsHunt</h3>
      </label>
      <h3>About us</h3>
      <h3>FAQ</h3>
    </section>
  );
}
