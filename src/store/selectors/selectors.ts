import { useAppSelector } from "../../hooks/useReduxTypes";

export const UserFavoriteAnime = () => {
    const email = useAppSelector((state) => state.user.email);
    const favoritesUserObj = useAppSelector((state) =>
    state.user.items.filter((user) => user.email === email).find(item => item)?.ids);

    return favoritesUserObj;
}
