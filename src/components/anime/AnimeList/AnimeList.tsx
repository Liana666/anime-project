import { AnimeCart } from "../AnimeCart/AnimeCart";
import { NotFound } from "../../error";

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
          anime.map((animeItem) => (
            <AnimeCart key={animeItem.id} {...animeItem} />
          ))
        ) : (
          <NotFound />
        )}
      </div>
    </>
  );
};
