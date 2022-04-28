import { FilterFormContainer } from "../filter";
import { SearchFormContainer } from "../search";
import { UpdateAnimeContainer } from "../update";

import "./AnimeSidebar.css";

export const AnimeSidebar = () => {
  return (
    <div className="sidebar">
      <FilterFormContainer />
      <hr style={{ marginBottom: 15, color: "#858588" }} />
      <SearchFormContainer />
      <hr style={{ marginBottom: 15, color: "#858588" }} />
      <UpdateAnimeContainer />
    </div>
  );
};
