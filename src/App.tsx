import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/loginPage/LoginPage";
import { RegisterPage } from "./pages/registerPage/RegisterPage";
import { MainPage } from "./pages/mainPage/MainPage";
import { PrivateRoute } from "./hoc/PrivateRoute";
import { Header } from "./components/layout/Header";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";
import { ErrorPage } from "./pages/errorPage/errorPage";

import "./App.css";

export function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}
