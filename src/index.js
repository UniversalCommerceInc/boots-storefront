import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <PayPalScriptProvider deferLoading={true}>
      <Provider store={store}>
        <App />
      </Provider>
    </PayPalScriptProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
