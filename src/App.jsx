import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Orders from "./screens/Orders";
import OrdersRouteError from "./components/OrdersRouteError";
import "./App.css";

export default function App() {
  const [showOrdersScreen, setShowOrdersScreen] = useState(false);

  function showOrdersScreenHandler() {
    setShowOrdersScreen(!showOrdersScreen);
  }

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={<Home showOrdersScreenHandler={showOrdersScreenHandler} />}
        />
        {showOrdersScreen && (
          <Route
            path="/orders"
            element={
              <Orders showOrdersScreenHandler={showOrdersScreenHandler} />
            }
          />
        )}
        {!showOrdersScreen && (
          <Route path="/orders" element={<OrdersRouteError />} />
        )}
      </Routes>
      <Footer />
    </div>
  );
}
