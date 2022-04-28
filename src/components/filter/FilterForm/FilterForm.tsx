import "./FilterForm.css";

type Props = {
  setGenre: React.Dispatch<React.SetStateAction<string>>;
  genres: string;
  data: string[];
  setYear: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  filterAnime: () => void;
  clearFilter: () => void;
};

export const FilterForm: React.FC<Props> = ({
  setGenre,
  genres,
  data,
  setYear,
  year,
  filterAnime,
  clearFilter,
}) => {
  return (
    <>
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
          data.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
      </select>
      <input
        className="filter-input"
        type="text"
        name="year"
        onChange={(e) => setYear(e.target.value)}
        value={year}
        placeholder="Year"
      />
      <button
        style={{ marginRight: 5 }}
        onClick={filterAnime}
        className="filter-btn"
        disabled={!genres}
      >
        Apply
      </button>
      <button disabled={!genres} onClick={clearFilter} className="filter-btn">
        Clear
      </button>
    </>
  );
};
