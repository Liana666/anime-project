import { useState } from "react";
import { FilterFormContainer } from "../filter";
import { SearchFormContainer } from "../search";
import { UpdateAnimeContainer } from "../update";

import "./AnimeSidebar.css";

export const AnimeSidebar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={isOpen ? "sidebar sidebar--open" : "sidebar sidebar--close"}
    >
      <button onClick={() => setOpen(!isOpen)} className="sidebar__btn">
        {isOpen ? "-" : "+"}
      </button>
      <div className="sidebar__wrapper">
        <FilterFormContainer />
        <hr style={{ marginBottom: 15, color: "#858588" }} />
        <SearchFormContainer />
        <hr style={{ marginBottom: 15, color: "#858588" }} />
        <UpdateAnimeContainer />
      </div>
    </div>
  );
};
