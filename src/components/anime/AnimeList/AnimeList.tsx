import { AnimeCart } from "./AnimeCart/AnimeCart";

import { ItemAnime } from "../../../types/types";

import "./AnimeList.css";

type Props = {
  anime: ItemAnime[];
};

export const AnimeList: React.FC<Props> = ({ anime }) => {
  return (
    <>
      <div className="anime-list">
        {anime.length > 0 ? (
          anime
            .slice(0, 10)
            .map((ani: ItemAnime) => <AnimeCart key={ani.id} {...ani} />)
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    </>
  );
};
