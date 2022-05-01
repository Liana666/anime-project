import { Link } from "react-router-dom";

import "./HistoryCart.css";

type Props = {
  isChecked: boolean;
  selectedHistory: () => void;
  date: string;
  url: string;
};

export const HistoryCart: React.FC<Props> = ({
  date,
  url,
  isChecked,
  selectedHistory,
}) => {
  return (
    <li className="history__item">
      <button
        value={isChecked ? "+" : ""}
        onClick={selectedHistory}
        className="history__check"
      >
        {isChecked ? "+" : null}
      </button>
      <span>{date}</span>
      <Link to={url}>
        <span>{url}</span>
      </Link>
    </li>
  );
};
