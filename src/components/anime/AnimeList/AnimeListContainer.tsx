import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../hooks/useReduxTypes";
import { animeApi } from "../../../store/api/animeApi";
import { addNewAnime } from "../../../store/slices/animeSlice";

import { Preloader } from "../../preloader/Preloader";
import { AnimeList } from "./AnimeList";

export const AnimeListContainer = () => {
  const dispatch = useDispatch();
  const anime = useAppSelector((state) => state.anime.anime);

  const { data, isLoading, fulfilledTimeStamp } =
    animeApi.useGetRandomAnimeQuery(40);

  useEffect(() => {
    fulfilledTimeStamp && dispatch(addNewAnime(data));
  }, [data, dispatch, fulfilledTimeStamp]);

  if (isLoading) {
    return <Preloader />;
  }

  return <AnimeList anime={anime} />;
};
