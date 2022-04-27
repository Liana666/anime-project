import { animeApi } from "../../../store/api/animeApi";

import { UpdateAnime } from "./UpdateAnime";

export const UpdateAnimeContainer = () => {
  const animeApiResponse = animeApi.useGetRandomAnimeQuery(40);

  const updateRandomAnime = () => {
    animeApiResponse.refetch();
  };

  return <UpdateAnime updateRandomAnime={updateRandomAnime} />;
};
