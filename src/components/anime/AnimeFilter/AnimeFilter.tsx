import "./AnimeFilter.css";

type Props = {
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  genres: string;
  data: any;
  setYearNoDebounce: React.Dispatch<React.SetStateAction<string>>;
  yearNoDebounce: string;
  filterAnime: () => void;
  clearFilter: () => void;
};

export const AnimeFilter: React.FC<Props> = ({
  setGenre,
  genres,
  data,
  setYearNoDebounce,
  yearNoDebounce,
  filterAnime,
  clearFilter,
}) => {
  console.log(data);
  return (
    <div className="filter">
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setYearNoDebounce(e.target.value)
        }
        value={yearNoDebounce}
        disabled={!genres}
        placeholder="Year"
      />
      <button
        style={{ marginRight: 5 }}
        onClick={filterAnime}
        className="filter-btn"
      >
        Apply
      </button>
      <button onClick={clearFilter} className="filter-btn">
        Clear
      </button>
    </div>
  );
};