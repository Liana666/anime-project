import { animeApi } from "../../store/animeApi";
import { Preloader } from "../Preloader/Preloader";
import { ItemAnimeType } from "../../types/types";
import "./AniList.css";
import { ItemAni } from "./ItemAni/ItemAni";
import { AnimeFilter } from "./Filter/AnimeFilter";
import { useState } from "react";

export const AniList = () => {
  const animeApiResponse = animeApi.useGetAnimeQuery(10);
  const [filteredAnime, setfilteredAnime] = useState<any>();

  const animeFilter = (anime: any) => {
    setfilteredAnime(anime.data);
  };

  const addNewAnime = () => {
    setfilteredAnime(null);
    animeApiResponse.refetch();
  };

  if (animeApiResponse.isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <div className="anime-filter">
        <AnimeFilter animeFilter={animeFilter} />
        <button className="filter-btn" onClick={addNewAnime}>
          Update random anime
        </button>
      </div>

      <div className="anime-list">
        {filteredAnime
          ? filteredAnime.documents.map((ani: ItemAnimeType) => (
              <ItemAni key={ani.id} {...ani} />
            ))
          : animeApiResponse.data.data.map((ani: ItemAnimeType) => (
              <ItemAni key={ani.id} {...ani} />
            ))}
      </div>
    </>
  );
};
