import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";

import { App } from "./App";
import { setUpStore } from "./store/store";
import "./firebase";

import "./index.css";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);
const store = setUpStore();

const app = (
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

root.render(app);
