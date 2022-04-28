import { useNavigate } from "react-router-dom";

import { animeApi } from "../../store/api/animeApi";

import { UpdateAnime } from "./UpdateAnime";

export const UpdateAnimeContainer = () => {
  const navigate = useNavigate();
  const animeApiResponse = animeApi.useGetRandomAnimeQuery(40);

  const updateRandomAnime = () => {
    animeApiResponse.refetch();
    navigate(`/`);
  };

  return <UpdateAnime updateRandomAnime={updateRandomAnime} />;
};
