import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addHistory } from "../../../store/slices/userSlice";

import { SearchForm } from "./SearchForm";

import { useAppDispatch } from "../../../hooks/useReduxTypes";
import { getDateHistory } from "../../../utils/helpers/getDateHistory";

export const SearchFormContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  function searchAnime() {
    const date = getDateHistory();
    const searchUrl = `/search/title=${searchTerm}`;
    dispatch(addHistory({ url: searchUrl, date }));
    navigate(searchUrl);
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
