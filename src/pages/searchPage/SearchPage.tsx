import { AnimeSearch } from "../../components/search";
import { AnimeSidebar } from "../../components/sidebar";

export const SearchPage = () => {
  return (
    <>
      <AnimeSidebar />
      <div className="container">
        <AnimeSearch />
      </div>
    </>
  );
};
