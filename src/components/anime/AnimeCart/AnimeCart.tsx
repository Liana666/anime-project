import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { AddFavoriteContainer } from "../../favorites";
import { preparingAnimeDetails } from "../../../utils/helpers/preparingAnimeDetails";
import { Button } from "../../shared";

import { ItemAnime } from "../../../types/types";

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
        <AddFavoriteContainer id={id} />
        <div className="cart__title-wrapper">
          <Link to={`/details/${id}`}>
            <div className="cart__title">
              <span>{titleStart}</span>{" "}
              <span style={{ color: cover_color }}>{titleEnd}</span>
            </div>
          </Link>
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
        <Button
          text="More"
          onClick={() => navigate(`/details/${id}`)}
          size="more"
        />
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
