import { useParams } from "react-router-dom";

import { animeApi } from "../../../store/api/animeApi";

import { AnimeList } from "../../anime";
import { Preloader } from "../../preloader/Preloader";

export const AnimeFilter = () => {
  const { genres, year } = useParams();

  const { data, isSuccess, isLoading } = animeApi.useGetFilterQuery(
    { year, genres },
    { skip: !genres || !year }
  );

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>{isSuccess && data?.length ? <AnimeList anime={data} /> : "Not Found"}</>
  );
};
