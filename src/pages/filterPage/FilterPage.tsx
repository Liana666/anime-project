import { AnimeFilterContainer } from "../../components/filter";
import { AnimeSidebarContainer } from "../../components/sidebar";

export const FilterPage = () => {
  return (
    <>
      <AnimeSidebarContainer />
      <div className="container">
        <AnimeFilterContainer />
      </div>
    </>
  );
};
