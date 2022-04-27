import { animeApi } from "../../../store/api/animeApi";

import { Preloader } from "../../preloader/Preloader";
import { AnimeCart } from "../AnimeCart/AnimeCart";

type Props = {
  id: number;
};

export const FavoritesAnime: React.FC<Props> = ({ id }) => {
  const { data, isLoading, isSuccess } = animeApi.useGetItemAnimeQuery(id);

  if (isLoading) {
    return <Preloader />;
  }

  return <>{isSuccess && <AnimeCart key={data.id} {...data} />}</>;
};
