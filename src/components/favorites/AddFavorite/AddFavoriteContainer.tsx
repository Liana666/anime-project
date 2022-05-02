import { useNavigate } from "react-router-dom";

import { useFavoriteAnime } from "../../../store/selectors/selectors";
import { addFavoriteAnime } from "../../../store/slices/userSlice";

import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxTypes";
import { removeFavoriteAnime } from "../../../store/slices/userSlice";
import { AddFavorite } from "./AddFavorite";

import "./AddFavorite.css";

type Props = {
  id: number;
};

export const AddFavoriteContainer: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const email = useAppSelector((state) => state.user.email);

  const favorites = useFavoriteAnime();

  const addFavorites = () => {
    if (!email) {
      navigate("/login");
    } else {
      dispatch(addFavoriteAnime({ id, email }));
    }
  };

  const removeFavorites = () => {
    dispatch(removeFavoriteAnime({ id }));
  };

  return (
    <AddFavorite
      id={id}
      favorites={favorites}
      addFavorites={addFavorites}
      removeFavorites={removeFavorites}
    />
  );
};
