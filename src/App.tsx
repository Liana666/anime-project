import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/loginPage/LoginPage";
import { RegisterPage } from "./pages/registerPage/RegisterPage";
import { MainPage } from "./pages/mainPage/MainPage";
import { PrivateRoute } from "./hoc/PrivateRoute";
import { HeaderContainer } from "./components/layout";
import { FavoritesPage } from "./pages/favoritesPage/FavoritesPage";
import { ErrorPage } from "./pages/errorPage/ErrorPage";
import { DetailsPage } from "./pages/singlePage/DetailsPage";
import { SearchPage } from "./pages/searchPage/SearchPage";
import { FilterPage } from "./pages/filterPage/FilterPage";
import { HistoryPage } from "./pages/historyPage/HistoryPage";

import "./App.css";

export function App() {
  return (
    <div className="App">
      <HeaderContainer />
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
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route
            path="/filter/genre=:genres/year=:year"
            element={<FilterPage />}
          />
          <Route
            path="/history"
            element={
              <PrivateRoute>
                <HistoryPage />
              </PrivateRoute>
            }
          />
          <Route path="/search/title=:title" element={<SearchPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
    </div>
  );
}
