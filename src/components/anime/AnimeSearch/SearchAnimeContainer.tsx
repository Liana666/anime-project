import { useState, useEffect } from "react";

import { animeApi } from "../../../store/api/animeApi";
import { addNewAnime } from "../../../store/slices/animeSlice";

import { useDebounce } from "../../../hooks/useDebounce";
import { useAppDispatch } from "../../../hooks/useReduxTypes";
import { SearchAnime } from "./SearchAnime";

export const SearchAnimeContainer = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSearchTerm, setFilteredSearchTerm] = useState(searchTerm);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const { data, fulfilledTimeStamp } =
    animeApi.useSearchAnimeQuery(filteredSearchTerm);

  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      setFilteredSearchTerm(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  function searchAnime() {
    fulfilledTimeStamp && dispatch(addNewAnime(data));
  }

  return (
    <SearchAnime
      searchAnime={searchAnime}
      setSearchTerm={setSearchTerm}
      searchTerm={searchTerm}
    />
  );
};
