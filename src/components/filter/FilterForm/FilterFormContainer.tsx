import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { animeApi } from "../../../store/api/animeApi";
import { addHistory } from "../../../store/slices/userSlice";

import { getDateHistory } from "../../../utils/helpers/getDateHistory";
import { FilterForm } from "./FilterForm";
import { useAppDispatch } from "../../../hooks/useReduxTypes";

export const FilterFormContainer = () => {
  const dispatch = useAppDispatch();
  const [genres, setGenre] = useState("");
  const [year, setYear] = useState("2022");
  const navigate = useNavigate();

  const { data } = animeApi.useGetGenresQuery(0);

  function filterAnime() {
    const date = getDateHistory();
    const filterUrl = `/filter/genre=${genres}/year=${year}`;
    dispatch(addHistory({ url: filterUrl, date }));
    navigate(filterUrl);
  }

  function clearFilter() {
    setGenre("");
    setYear("");
  }

  return (
    <>
      {data && (
        <FilterForm
          genres={genres}
          year={year}
          data={data}
          setGenre={setGenre}
          setYear={setYear}
          filterAnime={filterAnime}
          clearFilter={clearFilter}
        />
      )}
    </>
  );
};
