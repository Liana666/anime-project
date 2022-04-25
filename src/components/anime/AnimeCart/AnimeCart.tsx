import { Anime } from "../../../types/types";
import { AddFavorite } from "../AddFavorite/AddFavorite";

import "./AnimeCart.css";

export const AnimeCart: React.FC<Anime> = ({
  titles,
  description,
  start_date,
  cover_image,
  genres,
  id,
  episode_duration,
  season_period,
  cover_color,
  end_date,
}) => {
  const title_start = titles?.en.split(" ").slice(0, -1).join(" ");
  const title_end = titles.en.split(" ").pop();

  return (
    <div className="cart">
      <div className="cart__info">
        <AddFavorite id={id} />
        <div className="cart__title-wrapper">
          <div className="cart__title">
            <span>{title_start}</span>{" "}
            <span style={{ color: cover_color }}>{title_end}</span>
          </div>
          <div className="cart__date">
            <div>
              <p>Start date: </p>
              {start_date.slice(0, 10)}
            </div>
            <hr />
            <div>
              <p>End date: </p>
              {start_date.slice(0, 10)}
            </div>
          </div>
        </div>

        <ul
          className={
            genres.length > 12
              ? "cart__genres cart__genres--show"
              : "cart__genres"
          }
        >
          {genres.length > 0 && (
            <li className="cart__genres-title">Genres: </li>
          )}

          {genres.map((genre, index, array) => (
            <li key={genre}>
              {genre}
              {index !== array.length - 1 ? "," : null}
            </li>
          ))}
        </ul>

        <div className="cart__descr">
          {description ? description.slice(0, 150) + "..." : null}
        </div>
        <button className="btn">More</button>
      </div>
      <div className="cart__cover">
        <div style={{ color: cover_color }} className="cart__title--jp">
          {titles.jp?.slice(0, 7)}
        </div>
        <img src={cover_image} alt="" />
      </div>
    </div>
  );
};
