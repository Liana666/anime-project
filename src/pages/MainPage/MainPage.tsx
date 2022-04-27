import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "../../components/error";
import {
  AnimeListContainer,
  UpdateAnimeContainer,
  AnimeFilterContainer,
  SearchAnimeContainer,
} from "../../components/anime";

import "./MainPage.css";
import back from "../../img/back.jpg";
import { AnimeSidebar } from "../../components/anime/AnimeSidebar/AnimeSidebar";

export const MainPage = () => {
  return (
    <>
      <AnimeSidebar />
      <div className="container">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <AnimeListContainer />
        </ErrorBoundary>
      </div>
    </>
  );
};
