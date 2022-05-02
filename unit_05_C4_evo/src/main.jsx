import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AutoContextProvider } from "./context/AuthContext";
import { store } from "./Redux/store";
import { Provider as ReduxProvider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AutoContextProvider>
      <ReduxProvider store={store}>
        <App />
        </ReduxProvider>
      </AutoContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
