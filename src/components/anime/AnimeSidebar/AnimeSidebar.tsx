import { AnimeFilterContainer } from "../AnimeFilter/AnimeFilterContainer";
import { SearchAnimeContainer } from "../AnimeSearch/SearchAnimeContainer";
import { UpdateAnimeContainer } from "../UpdateAnime/UpdateAnimeContainer";

import "./AnimeSidebar.css";

export const AnimeSidebar = () => {
  return (
    <div className="sidebar">
      <AnimeFilterContainer />
      <hr style={{ marginBottom: 15 }} />
      <hr style={{ marginBottom: 15 }} />
      <hr style={{ marginBottom: 15 }} />
      <SearchAnimeContainer />
      <UpdateAnimeContainer />
    </div>
  );
};
