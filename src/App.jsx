import { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Error from "./components/Error";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Orders from "./screens/Orders";
import AboutUs from "./screens/AboutUs";
import FAQ from "./screens/FAQ";
import errorMessage from "./data/error-messages.json";
import "./App.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enteredPhone, setEnteredPhone] = useState();

  const inputedDataHandler = useCallback((enteredPhone) => {
    setEnteredPhone(enteredPhone);
  }, []);

  function loginHandler() {
    setIsLoggedIn(true);
  }

  const HomeScreen = (
    <Home loginHandler={loginHandler} inputedDataHandler={inputedDataHandler} />
  );

  const OrdersScreen = (
    <Orders isLoggedIn={isLoggedIn} enteredPhone={enteredPhone} />
  );

  const ErrorScreen = <Error message={errorMessage.generalRoutes} />;

  return (
    <div className="app">
      <NavigationBar />
      <Routes>
        <Route path="/" element={HomeScreen} />
        <Route path="/orders" element={OrdersScreen} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={ErrorScreen} />
      </Routes>
      <Footer />
    </div>
  );
}
