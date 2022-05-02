import { useParams } from "react-router-dom";

import { animeApi } from "../../../store/api/animeApi";

import { Preloader } from "../../preloader/Preloader";
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
    <h2>Not Found</h2>
  );
};
