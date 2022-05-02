import { useAppSelector } from "../../hooks/useReduxTypes";

export const useFavoriteAnime = () => {
    const email = useAppSelector((state) => state.user.email);
    const favoritesUserObj = useAppSelector((state) =>
        state.user.favorites
            .filter((user) => user.email === email)[0]
            ?.ids
    );

    return favoritesUserObj;
}


export const useHistoryUser = () => {
    const email = useAppSelector((state) => state.user.email);
    const historyItem = useAppSelector((state) => 
        state.user.history
            .filter((user) => user.email === email)[0]
            ?.items
    );

    return historyItem;
}

