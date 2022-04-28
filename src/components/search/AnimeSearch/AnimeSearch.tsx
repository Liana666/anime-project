import { useParams } from "react-router-dom";

import { animeApi } from "../../../store/api/animeApi";

import { AnimeList } from "../../anime";
import { Preloader } from "../../preloader/Preloader";

export const AnimeSearch = () => {
  const { title } = useParams();

  const { data, isSuccess, isLoading } = animeApi.useSearchAnimeQuery(title, {
    skip: !title,
  });

  if (isLoading) {
    return <Preloader />;
  }

  return isSuccess && data?.length ? (
    <AnimeList anime={data} />
  ) : (
    <h2>Not Found</h2>
  );
};
