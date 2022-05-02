import { HistoryCartContainer } from "../HistoryCart/HistoryCartContainer";

import { HistoryItem } from "../../../types/types";

import "./HistoryList.css";
import { Button } from "../../shared";

type Props = {
  selectedArray: string[];
  removeHistoryAnime: () => void;
  checkedHistory: (id: string) => void;
  userHistory: HistoryItem[] | undefined;
};

export const HistoryList: React.FC<Props> = ({
  selectedArray,
  removeHistoryAnime,
  checkedHistory,
  userHistory,
}) => {
  return (
    <>
      <div className="history__top">
        <div className="history__selected-title">
          Selected: {selectedArray.length}
        </div>
        <Button
          text="Delete"
          onClick={removeHistoryAnime}
          disabled={!selectedArray.length}
          size="small history__btn"
        />
      </div>

      <ul className="history__list">
        {userHistory?.length ? (
          userHistory?.map((item) => (
            <HistoryCartContainer
              key={item.id}
              {...item}
              checkedHistory={checkedHistory}
            />
          ))
        ) : (
          <h2>History is empty</h2>
        )}
      </ul>
    </>
  );
};
