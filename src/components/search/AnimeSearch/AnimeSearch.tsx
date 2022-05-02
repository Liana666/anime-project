import { ItemAnime } from "../../../types/types";
import { AnimeList } from "../../anime";

type Props = {
  anime: ItemAnime[];
};

export const AnimeSearch: React.FC<Props> = ({ anime }) => {
  return <AnimeList anime={anime} />;
};
