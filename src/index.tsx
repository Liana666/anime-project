import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "./App";
import { store, persistor } from "./store/store";
import "./firebase/firebase";

import "./index.css";
import { Preloader } from "./components/preloader/Preloader";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

const app = (
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<Preloader />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);

root.render(app);
