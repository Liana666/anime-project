import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../../hooks/useReduxTypes";
import { addFavoriteAnime } from "../../../store/slices/userSlice";
import { removeFavoriteAnime } from "../../../store/slices/userSlice";

import "./AddFavorite.css";
import { UserFavoriteAnime } from "../../../store/selectors/selectors";

type Props = {
  id: number;
};

export const AddFavorite: React.FC<Props> = ({ id }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const email = useAppSelector((state) => state.user.email);

  const favorites = UserFavoriteAnime();

  const addFavorites = () => {
    !email && navigate("/login");
    dispatch(addFavoriteAnime({ id }));
  };

  return (
    <>
      {favorites && favorites.find((idUser) => idUser === id) ? (
        <button
          className="cart__add-favorites"
          onClick={() => dispatch(removeFavoriteAnime({ id }))}
        >
          - Delete from favorites
        </button>
      ) : (
        <button className="cart__add-favorites" onClick={addFavorites}>
          + Add in favorites
        </button>
      )}
    </>
  );
};
