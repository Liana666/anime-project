import { AnimeCart } from "../AnimeCart/AnimeCart";
import { UserFavoriteAnime } from "../../../store/selectors/selectors";

export const FavoritesAnime = () => {
  const favoritesAnime = UserFavoriteAnime();
  console.log(favoritesAnime);
  return (
    <div className="anime-list">
      {favoritesAnime ? (
        favoritesAnime.map((anime) => <AnimeCart key={anime.id} {...anime} />)
      ) : (
        <h2>As long as there is no favorite</h2>
      )}
    </div>
  );
};
