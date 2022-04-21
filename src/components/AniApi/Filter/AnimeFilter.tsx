import { FC } from "react";
import { useState, useEffect } from "react";
import { animeApi } from "../../../store/animeApi";
import { useDispatch } from "react-redux";
import "./AnimeFilter.css";
import { addNewAnime } from "../../../store/slices/animeSlice";
import { Preloader } from "../../Preloader/Preloader";

export const AnimeFilter = () => {
  const { data } = animeApi.useGetGenresQuery(0);
  const [genres, setGenre] = useState("All genres");
  const [year, setYear] = useState("");
  const newAnime = animeApi.useGetFilterQuery({ year, genres });
  const dispatch = useDispatch();

  function filterAnime() {
    let response = newAnime;
    response.fulfilledTimeStamp ? dispatch(addNewAnime(response.data.data.documents)) : <Preloader />;
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
        type="text"
        name="year"
        onChange={(e: any) => setYear(e.target.value)}
        value={year}
        placeholder="Year"
      />
      <button onClick={filterAnime} className="filter-btn">
        Apply
      </button>
    </div>
  );
};
