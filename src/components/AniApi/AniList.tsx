import { animeApi } from "../../store/animeApi";
import { Preloader } from "../Preloader/Preloader";
import { ItemAnimeType } from "../../types/types";
import "./AniList.css";
import { ItemAni } from "./ItemAni/ItemAni";
import { AnimeFilter } from "./Filter/AnimeFilter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewAnime } from "../../store/slices/animeSlice";
import { RootState } from "../../store/store";
import { Search } from "./Search/Search";

export const AniList = () => {
  const animeApiResponse = animeApi.useGetAnimeQuery(10);
  const dispatch = useDispatch();
  const anime = useSelector((state: RootState) => state.anime.anime);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await animeApiResponse;
      dispatch(addNewAnime(response.data.data));
    }
    fetchMyAPI();
  }, [animeApiResponse, dispatch]);

  const updateRandomAnime = () => {
    animeApiResponse.refetch();
  };

  if (animeApiResponse.isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <div className="anime-filter">
        <AnimeFilter />
        <div>
          <Search />
          <button className="filter-btn" onClick={updateRandomAnime}>
            Update random anime
          </button>
        </div>
      </div>

      <div className="anime-list">
        {anime.length > 0 ? (
          anime
            .slice(0, 10)
            .map((ani: ItemAnimeType) => <ItemAni key={ani.id} {...ani} />)
        ) : (
          <h2>Not Found</h2>
        )}
      </div>
    </>
  );
};
