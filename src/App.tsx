import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/Login/LoginPage";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProtectedRoute } from "./hoc/ProtectedRoute";
import { Header } from "./components/Header/Header";

import "./App.css";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage";

export function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
        <Route
          path="/favorites"
          element={
            <ProtectedRoute>
              <FavoritesPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
