import { AnimeListContainer } from "../../components/anime";
import { AnimeSidebar } from "../../components/sidebar";

import "./MainPage.css";

export const MainPage = () => {
  return (
    <>
      <AnimeSidebar />
      <div className="container">
        <AnimeListContainer />
      </div>
    </>
  );
};
