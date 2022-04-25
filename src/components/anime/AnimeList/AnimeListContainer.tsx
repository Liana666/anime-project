import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store/store";
import { animeApi } from "../../../store/api/animeApi";
import { addNewAnime } from "../../../store/slices/animeSlice";

import { Preloader } from "../../preloader/Preloader";
import { AnimeList } from "./AnimeList";

export const AnimeListContainer = () => {
  const { data, isLoading, fulfilledTimeStamp } =
    animeApi.useGetRandomAnimeQuery(10);
  const dispatch = useDispatch();
  const anime = useSelector((state: RootState) => state.anime.anime);

  useEffect(() => {
    fulfilledTimeStamp && dispatch(addNewAnime(data));
  }, [data, dispatch, fulfilledTimeStamp]);

  if (isLoading) {
    return <Preloader />;
  }

  return <AnimeList anime={anime} />;
};
