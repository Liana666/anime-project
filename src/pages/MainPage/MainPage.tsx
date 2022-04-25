import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "../../components/error";
import {
  AnimeListContainer,
  UpdateAnimeContainer,
  AnimeFilterContainer,
  SearchAnimeContainer,
} from "../../components/anime";

import "./MainPage.css";

import img from "../../img/img4.jpg";

export const MainPage = () => {
  return (
    <>
      <main className="main">
        <img className="back" src={img} alt="" />
        <div className="main__container">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <div className="anime-filter">
              <AnimeFilterContainer />
              <div className="search">
                <SearchAnimeContainer />
                <UpdateAnimeContainer />
              </div>
            </div>
            <AnimeListContainer />
          </ErrorBoundary>
        </div>
      </main>
    </>
  );
};
