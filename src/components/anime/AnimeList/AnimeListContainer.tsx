import { ErrorBoundary } from "react-error-boundary";

import { animeApi } from "../../../store/api/animeApi";

import { ErrorFallback } from "../../error";
import { Preloader } from "../../preloader/Preloader";
import { AnimeList } from "./AnimeList";

export const AnimeListContainer = () => {
  const { data, isLoading, isSuccess } = animeApi.useGetRandomAnimeQuery(40);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {isSuccess && data && <AnimeList anime={data} />}
    </ErrorBoundary>
  );
};
