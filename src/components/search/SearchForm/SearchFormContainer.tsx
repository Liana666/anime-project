import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useDebounce } from "../../../hooks/useDebounce";
import { SearchForm } from "./SearchForm";

export const SearchFormContainer = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSearchTerm, setFilteredSearchTerm] = useState(searchTerm);
  const debouncedSearchTerm = useDebounce(searchTerm, 600);

  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      setFilteredSearchTerm(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  function searchAnime() {
    navigate(`/search/title=${filteredSearchTerm}`);
  }

  return (
    <>
      <SearchForm
        searchAnime={searchAnime}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
    </>
  );
};
