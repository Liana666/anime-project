import { FC } from "react";
import { useState } from "react";
import { animeApi } from "../../../store/animeApi";
import "./AnimeFilter.css";

type Props = {
  animeFilter: any;
};

export const AnimeFilter: FC<Props> = ({ animeFilter }) => {
  const { data } = animeApi.useGetGenresQuery(0);
  const [genres, setGenre] = useState("All genres");
  const [year, setYear] = useState(1998);
  const [title, setTitle] = useState("");
  const newAnime = animeApi.useGetFilterQuery({ title, year, genres });

  function filterAnime() {
    animeFilter(newAnime.data);
  }

  return (
    <div>
      <select
        className="filter-select"
        placeholder="Genres"
        onChange={(e) => setGenre(e.target.value)}
        value={genres}
        name="genres"
        id=""
      >
        <option>All genres</option>
        {data &&
          data.data.genres.map((genre: string) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
      </select>
      <input
        className="filter-input"
        type="number"
        name="year"
        onChange={(e: any) => setYear(e.target.value)}
        value={year}
        placeholder="Year"
      />
      <input
        className="filter-input"
        type="text"
        name="anime"
        placeholder="Anime name"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button onClick={filterAnime} className="filter-btn">
        Apply
      </button>
    </div>
  );
};
