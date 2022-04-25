import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { animeApi } from "../../../store/api/animeApi";
import { addNewAnime } from "../../../store/slices/animeSlice";

import { useDebounce } from "../../../hooks/useDebounce";
import { AnimeFilter } from "./AnimeFilter";

export const AnimeFilterContainer = () => {
  const { data } = animeApi.useGetGenresQuery(0);
  const [genres, setGenre] = useState("");
  const [yearNoDebounce, setYearNoDebounce] = useState("");
  const debouncedSearchTerm = useDebounce(yearNoDebounce, 300);
  const [year, setYear] = useState(yearNoDebounce);
  const newAnime = animeApi.useGetFilterQuery({ year, genres });
  const dispatch = useDispatch();

  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      setYear(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  function filterAnime() {
    let response = newAnime;
    response.fulfilledTimeStamp && dispatch(addNewAnime(response.data));
  }

  function clearFilter() {
    setGenre("");
    setYearNoDebounce("");
  }

  return (
    <AnimeFilter
      genres={genres}
      yearNoDebounce={yearNoDebounce}
      data={data}
      setGenre={setGenre}
      setYearNoDebounce={setYearNoDebounce}
      filterAnime={filterAnime}
      clearFilter={clearFilter}
    />
  );
};
