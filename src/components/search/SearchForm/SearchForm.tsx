type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchAnime: () => void;
  searchTerm: string;
};

export const SearchForm: React.FC<Props> = ({
  setSearchTerm,
  searchAnime,
  searchTerm,
}) => {
  return (
    <>
      <input
        className="filter-input"
        type="text"
        name="anime"
        placeholder="Anime name"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      <button
        style={{ marginRight: 5 }}
        onClick={searchAnime}
        className="filter-btn"
        disabled={!searchTerm}
      >
        Search
      </button>
    </>
  );
};
