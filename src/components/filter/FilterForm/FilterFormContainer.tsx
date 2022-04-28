import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { animeApi } from "../../../store/api/animeApi";

import { useDebounce } from "../../../hooks/useDebounce";
import { FilterForm } from "./FilterForm";

export const FilterFormContainer = () => {
  const [genres, setGenre] = useState("");
  const [yearNoDebounce, setYearNoDebounce] = useState("2022");
  const [year, setYear] = useState(yearNoDebounce);
  const navigate = useNavigate();

  const { data } = animeApi.useGetGenresQuery(0);
  const debouncedSearchTerm = useDebounce(yearNoDebounce, 300);

  useEffect(() => {
    if (debouncedSearchTerm.length > 0) {
      setYear(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  function filterAnime() {
    navigate(`/filter/genre=${genres}/year=${year}`);
  }

  function clearFilter() {
    setGenre("");
    setYearNoDebounce("");
  }

  return (
    <>
      {data && (
        <FilterForm
          genres={genres}
          yearNoDebounce={yearNoDebounce}
          data={data}
          setGenre={setGenre}
          setYearNoDebounce={setYearNoDebounce}
          filterAnime={filterAnime}
          clearFilter={clearFilter}
        />
      )}
    </>
  );
};
