import { useState } from "react";

import { HistoryCart } from "./HistoryCart";

type Props = {
  date: string;
  url: string;
  id: string;
  checkedHistory: (id: string) => void;
};

export const HistoryCartContainer: React.FC<Props> = ({
  date,
  url,
  id,
  checkedHistory,
}) => {
  const [isChecked, setChecked] = useState(false);

  function selectedHistory() {
    setChecked(!isChecked);
    checkedHistory(id);
  }

  return (
    <HistoryCart
      isChecked={isChecked}
      selectedHistory={selectedHistory}
      date={date}
      url={url}
    />
  );
};
