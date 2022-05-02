import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { animeApi } from "../../store/api/animeApi";

import { Preloader } from "../preloader/Preloader";
import { DetailsAnime } from "./DetailsAnime";
import { ErrorFallback } from "../error";

export const DetailsAnimeContainer = () => {
  const { id } = useParams();
  const [idAnime, setIdAnime] = useState<string | number>("");

  const { data, isLoading, isSuccess } = animeApi.useGetItemAnimeQuery(
    idAnime,
    {
      skip: idAnime === "",
    }
  );

  useEffect(() => {
    id && setIdAnime(id);
  }, [id]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {isSuccess && data ? <DetailsAnime key={data.id} {...data} /> : null}
    </ErrorBoundary>
  );
};
