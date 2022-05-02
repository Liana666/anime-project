import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FilterFormContainer } from "../filter";
import { SearchFormContainer } from "../search";
import { UpdateAnimeContainer } from "../update";

import "./AnimeSidebar.css";

type Props = {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AnimeSidebar: React.FC<Props> = ({ isOpen, setOpen }) => {
  return (
    <div
      className={isOpen ? "sidebar sidebar--open" : "sidebar sidebar--close"}
    >
      <button onClick={() => setOpen(!isOpen)} className="sidebar__btn">
        {isOpen ? "-" : "+"}
      </button>
      <div className="sidebar__wrapper">
        <div className="sidebar__navlink-mob">
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/history">History</NavLink>
        </div>
        <FilterFormContainer />
        <hr style={{ marginBottom: 15, color: "#858588" }} />
        <SearchFormContainer />
        <hr style={{ marginBottom: 15, color: "#858588" }} />
        <UpdateAnimeContainer />
      </div>
    </div>
  );
};
