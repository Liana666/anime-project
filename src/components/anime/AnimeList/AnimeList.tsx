import { AnimeCart } from "../AnimeCart/AnimeCart";

import { Anime, ItemAnime } from "../../../types/types";

import "./AnimeList.css";

type Props = {
  anime: ItemAnime[];
};

export const AnimeList: React.FC<Props> = ({ anime }) => {
  return (
    <>
      <div className="anime-list">
        {anime.length > 0 ? (
          anime.map((ani: any) => <AnimeCart key={ani.id} {...ani} />)
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    </>
  );
};
