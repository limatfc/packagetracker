import { useCallback, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Orders from "./screens/Orders";
import OrdersRouteError from "./components/OrdersRouteError";
import "./App.css";

export default function App() {
  const [showOrdersScreen, setShowOrdersScreen] = useState(false);
  const [enteredValues, setEnteredValues] = useState({});

  function showOrdersScreenHandler() {
    setShowOrdersScreen(!showOrdersScreen);
  }

  const enteredValuesHandler = useCallback((enteredParcel, enteredPhone) => {
    setEnteredValues({
      enteredParcel: enteredParcel,
      enteredPhone: enteredPhone,
    });
  }, []);

  console.log("enteredValues", enteredValues);

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
        {showOrdersScreen && (
          <Route
            path="/orders"
            element={
              <Orders
                enteredValues={enteredValues}
                showOrdersScreenHandler={showOrdersScreenHandler}
              />
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
