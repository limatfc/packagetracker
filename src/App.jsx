import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Orders from "./screens/Orders";

export default function App() {
  return (
    <div>
      <NavigationBar />
      {/* <Home /> */}
      <Orders />
      <Footer />
    </div>
  );
}
