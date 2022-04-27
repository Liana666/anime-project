import { ItemAnime } from "../../../types/types";
import { AddFavorite } from "../../favorites/AddFavorite/AddFavorite";

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
  const isScroll = genres.length > 12;
  const titleStart = titles.en && titles.en.split(" ").slice(0, -1).join(" ");
  const titleEnd = titles.en && titles.en.split(" ").pop();
  const titleJp = titles.jp && titles.jp.slice(0, 9);
  const dateStart = start_date.slice(0, 10);
  const dateEnd = end_date.slice(0, 10);
  const description = descriptions.en && descriptions.en.slice(0, 150) + "...";

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
        <button className="btn">More</button>
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
