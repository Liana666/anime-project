import { useParams } from "react-router-dom";

import { animeApi } from "../../../store/api/animeApi";

import { NotFound } from "../../error";
import { Preloader } from "../../preloader";
import { AnimeSearch } from "./AnimeSearch";

export const AnimeSearchContainer = () => {
  const { title } = useParams();

  const { data, isSuccess, isLoading } = animeApi.useSearchAnimeQuery(title, {
    skip: !title,
  });

  if (isLoading) {
    return <Preloader />;
  }

  return isSuccess && data?.length ? (
    <AnimeSearch anime={data} />
  ) : (
    <NotFound />
  );
};
