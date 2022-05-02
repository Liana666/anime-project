import { useParams } from "react-router-dom";

import { animeApi } from "../../../store/api/animeApi";

import { Preloader } from "../../preloader/Preloader";
import { AnimeFilter } from "./AnimeFilter";

export const AnimeFilterContainer = () => {
  const { genres, year } = useParams();

  const { data, isSuccess, isLoading } = animeApi.useGetFilterQuery(
    { year, genres },
    { skip: !genres || !year }
  );

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      {isSuccess && data?.length ? (
        <AnimeFilter anime={data} />
      ) : (
        <h2>Not Found</h2>
      )}
    </>
  );
};
