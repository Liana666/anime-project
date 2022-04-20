import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { animeApi } from "../../../store/animeApi";
import { addNewAnime } from "../../../store/slices/animeSlice";

export const Search = () => {
  const [title, setTitle] = useState("");
  const foundAnime = animeApi.useSearchAnimeQuery(title);
  const dispatch = useDispatch();

  async function searchAnime() {
    let response = await foundAnime;
    dispatch(addNewAnime(response.data.data.documents));
  }

  return (
    <input
      className="filter-input"
      type="text"
      name="anime"
      placeholder="Anime name"
      onKeyPress={searchAnime}
      onChange={(e) => setTitle(e.target.value)}
      value={title}
    />
  );
};
