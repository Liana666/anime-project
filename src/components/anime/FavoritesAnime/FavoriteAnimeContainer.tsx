import { UserFavoriteAnime } from "../../../store/selectors/selectors";
import { FavoritesAnime } from "./FavoritesAnime";

export const FavoriteAnimeContainer = () => {
  const ids = UserFavoriteAnime();

  return (
    <div className="anime-list">
      {ids && ids.length > 0 ? (
        ids.map((id) => <FavoritesAnime key={id} id={id} />)
      ) : (
        <h2>As long as there is no favorite</h2>
      )}
    </div>
  );
};
