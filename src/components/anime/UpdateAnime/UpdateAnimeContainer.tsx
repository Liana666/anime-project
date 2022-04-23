import { animeApi } from "../../../store/api/animeApi";

import { UpdateAnime } from "./UpdateAnime";

export const UpdateAnimeContainer = () => {
  const animeApiResponse = animeApi.useGetRandomAnimeQuery(10);

  const updateRandomAnime = () => {
    animeApiResponse.refetch();
  };

  return <UpdateAnime updateRandomAnime={updateRandomAnime} />;
};
