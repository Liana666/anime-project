import { useState } from "react";

import { useAppDispatch } from "../../../hooks/useReduxTypes";
import { useHistoryUser } from "../../../store/selectors/selectors";
import { removeHistory } from "../../../store/slices/userSlice";

import { HistoryList } from "./HistoryList";

import "./HistoryList.css";

export const HistoryListContainer = () => {
  const dispatch = useAppDispatch();
  const userHistory = useHistoryUser();
  const [selectedArray, setSelectedArray] = useState<string[]>([]);

  const checkedHistory = (id: string) => {
    const indexCurrentId = selectedArray.indexOf(id);

    if (indexCurrentId !== -1) {
      setSelectedArray(selectedArray.filter((item) => item !== id));
    } else {
      setSelectedArray([...selectedArray, id]);
    }
  };

  const removeHistoryAnime = () => {
    dispatch(removeHistory(selectedArray));
    setSelectedArray([]);
  };

  return (
    <HistoryList
      selectedArray={selectedArray}
      removeHistoryAnime={removeHistoryAnime}
      checkedHistory={checkedHistory}
      userHistory={userHistory}
    />
  );
};
