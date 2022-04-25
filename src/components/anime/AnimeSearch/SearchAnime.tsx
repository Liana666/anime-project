type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchAnime: () => void;
  searchTerm: string;
};

export const SearchAnime: React.FC<Props> = ({
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
        onKeyPress={searchAnime}
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </>
  );
};
