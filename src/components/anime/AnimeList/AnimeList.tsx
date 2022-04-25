import { AnimeCart } from "../AnimeCart/AnimeCart";

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
          anime.map((ani: ItemAnime) => (
            <AnimeCart
              key={ani.id}
              titles={ani.titles}
              description={ani.descriptions.en}
              start_date={ani.start_date}
              cover_image={ani.cover_image}
              genres={ani.genres}
              id={ani.id}
              episode_duration={ani.episode_duration}
              season_period={ani.season_period}
              cover_color={ani.cover_color}
              end_date={ani.end_date}
            />
          ))
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    </>
  );
};
