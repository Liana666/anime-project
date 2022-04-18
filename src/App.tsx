import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/Login/LoginPage";
import { RegisterPage } from "./pages/Register/RegisterPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProtectedRoute } from "./hoc/ProtectedRoute";

import "./App.css";

export function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <ProtectedRoute>
              <MainPage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}
