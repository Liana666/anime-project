import { ItemAnime } from "../../types/types";
import { AddFavorite } from "../favorites";

import "./DetailsAnime.css";

export const DetailsAnime: React.FC<ItemAnime> = ({
  id,
  titles,
  season_period,
  episodes_count,
  cover_color,
  cover_image,
  descriptions,
  start_date,
  end_date,
  banner_image,
  genres,
}) => {
  const titleStart = titles.en && titles.en.split(" ").slice(0, -1).join(" ");
  const titleEnd = titles.en && titles.en.split(" ").pop();
  const titleJp = titles.jp && titles.jp.slice(0, 9);
  const dateStart = start_date.slice(0, 10);
  const dateEnd = end_date.slice(0, 10);

  return (
    <div className="single">
      <div className="single__banner">
        <img src={banner_image} alt="" />
        <div className="container">
          <div className="single__wrapper">
            <div className="single__cover">
              <img src={cover_image} alt="" />
              <span
                style={{ color: cover_color }}
                className="single__title--jp"
              >
                {titleJp}
              </span>
            </div>
            <div className="single__info">
              <div>
                <AddFavorite id={id} />
                <div className="single__title">
                  <span>{titleStart}</span>{" "}
                  <span style={{ color: cover_color }}>{titleEnd}</span>
                </div>
                <div className="single__date">
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

              <div className="single__description">{descriptions.en}</div>
              <div className="single__counts">
                <div className="single__counts-item">
                  <p>Number of seasons</p>
                  <p>
                    {season_period < 10 ? 0 : null}
                    {season_period}
                  </p>
                </div>
                <div className="single__counts-item">
                  <p>Number of episodes</p>
                  <p>
                    {episodes_count < 10 ? 0 : null}
                    {episodes_count}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container container--2">
        <ul className="single__genres">
          {genres.map((genre: any) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
