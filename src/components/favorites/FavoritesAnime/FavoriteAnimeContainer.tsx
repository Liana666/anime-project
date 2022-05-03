import { useFavoriteAnime } from "../../../store/selectors/selectors";

import { FavoritesAnime } from "./FavoritesAnime";

export const FavoriteAnimeContainer = () => {
  const ids = useFavoriteAnime();
  return (
    <div className="anime-list">
      {ids && ids.length > 0 ? (
        ids.map((id) => <FavoritesAnime key={id} id={id} />)
      ) : (
        <h2>No favorites anime</h2>
      )}
    </div>
  );
};
