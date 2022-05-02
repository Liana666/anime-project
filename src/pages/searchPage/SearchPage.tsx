import { AnimeSearchContainer } from "../../components/search";
import { AnimeSidebarContainer } from "../../components/sidebar";

export const SearchPage = () => {
  return (
    <>
      <AnimeSidebarContainer />
      <div className="container">
        <AnimeSearchContainer />
      </div>
    </>
  );
};
