import { FC } from "react";
import { ItemAnimeType } from "../../../types/types";
import "./ItemAni.css";

export const ItemAni: FC<ItemAnimeType> = ({
  titles,
  descriptions,
  start_date,
  cover_image,
  cover_color,
  banner_image,
  genres,
}) => {
  return (
    <div className="card">
      <div className="card__cover">
        <img src={cover_image} alt="" />
      </div>
      <div className="card__info">
        <div>
          <div className="card__title">{titles.rj}</div>
          <p className="card__date">
            <span>Date: </span>
            {start_date.slice(0, 10)}
          </p>
        </div>

        <div>
          {genres.length > 0 && <p className="card__genres-title">Genres: </p>}
          <ul
            className={
              genres.length > 10 ? "card__genres--show" : "card__genres"
            }
          >
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>

        <div className="card__descr">
          {descriptions.en ? descriptions.en.slice(0, 150) : null}...
        </div>
      </div>
    </div>
  );
};
