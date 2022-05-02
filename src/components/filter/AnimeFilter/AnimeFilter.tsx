import { AnimeList } from "../../anime";

import { ItemAnime } from "../../../types/types";

type Props = {
  anime: ItemAnime[];
};

export const AnimeFilter: React.FC<Props> = ({ anime }) => {
  return <AnimeList anime={anime} />;
};
