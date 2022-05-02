import "./AddFavorite.css";

type Props = {
  id: number;
  favorites: number[];
  addFavorites: () => void;
  removeFavorites: () => void;
};

export const AddFavorite: React.FC<Props> = ({
  id,
  favorites,
  addFavorites,
  removeFavorites,
}) => {
  return (
    <>
      {favorites && favorites.find((idUser) => idUser === id) ? (
        <button className="cart__add-favorites" onClick={removeFavorites}>
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
