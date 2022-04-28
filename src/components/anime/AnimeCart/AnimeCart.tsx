import { useNavigate } from "react-router-dom";
import { ItemAnime } from "../../../types/types";
import { AddFavorite } from "../../favorites/AddFavorite/AddFavorite";
import { preparingAnimeDetails } from "../../../utils/helpers/preparingAnimeDetails";

import "./AnimeCart.css";

export const AnimeCart: React.FC<ItemAnime> = ({
  titles,
  descriptions,
  start_date,
  cover_image,
  genres,
  id,
  cover_color,
  end_date,
}) => {
  const navigate = useNavigate();

  const {
    isScroll,
    titleStart,
    titleEnd,
    titleJp,
    dateStart,
    dateEnd,
    description,
  } = preparingAnimeDetails(genres, titles, start_date, end_date, descriptions);

  return (
    <div className="cart">
      <div className="cart__info">
        <AddFavorite id={id} />
        <div className="cart__title-wrapper">
          <div className="cart__title">
            <span>{titleStart}</span>{" "}
            <span style={{ color: cover_color }}>{titleEnd}</span>
          </div>
          <div className="cart__date">
            <div>
              <p>Start date: </p>
              {dateStart}
            </div>
            <hr />
            <div>
              <p>End date: </p>
              {dateEnd}
            </div>
          </div>
        </div>

        <ul
          className={
            isScroll ? "cart__genres cart__genres--show" : "cart__genres"
          }
        >
          {genres.length > 0 && (
            <li className="cart__genres-title">Genres: </li>
          )}

          {genres.map((genre, index, array) => (
            <li key={genre}>
              {genre}
              {index !== array.length - 1 && ","}
            </li>
          ))}
        </ul>

        <div className="cart__descr">{description}</div>
        <button onClick={() => navigate(`/details/${id}`)} className="btn">
          More
        </button>
      </div>
      <div className="cart__cover">
        <div style={{ color: cover_color }} className="cart__title--jp">
          {titleJp}
        </div>
        <img src={cover_image} alt="" />
      </div>
    </div>
  );
};
