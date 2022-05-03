import { AnimeListContainer } from "../../components/anime";
import { AnimeSidebarContainer } from "../../components/sidebar";

import "./MainPage.css";

export const MainPage = () => {
  return (
    <>
      <AnimeSidebarContainer />
      <div className="container container--main">
        <AnimeListContainer />
      </div>
    </>
  );
};
