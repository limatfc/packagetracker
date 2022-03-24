import { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Orders from "./screens/Orders";
import AboutUs from "./screens/AboutUs";
import FAQ from "./screens/FAQ";
import "./App.css";

export default function App() {
  const [showOrdersScreen, setShowOrdersScreen] = useState(false);
  const [enteredPhone, setEnteredPhone] = useState();

  function showOrdersScreenHandler() {
    setShowOrdersScreen(true);
  }

  const enteredValuesHandler = useCallback((enteredPhone) => {
    setEnteredPhone(enteredPhone);
  }, []);

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              showOrdersScreenHandler={showOrdersScreenHandler}
              enteredValuesHandler={enteredValuesHandler}
            />
          }
        />
        <Route
          path="/orders"
          element={
            <Orders
              showOrdersScreen={showOrdersScreen}
              enteredPhone={enteredPhone}
            />
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </div>
  );
}
