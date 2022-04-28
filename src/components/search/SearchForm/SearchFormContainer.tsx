import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { addHistory } from "../../../store/slices/userSlice";

import { SearchForm } from "./SearchForm";
import { useAppDispatch } from "../../../hooks/useReduxTypes";

export const SearchFormContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  function searchAnime() {
    const searchUrl = `/search/title=${searchTerm}`;
    dispatch(addHistory(searchUrl));
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
