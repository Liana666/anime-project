import { AnimeFilter } from "../../components/filter";
import { AnimeSidebar } from "../../components/sidebar";

export const FilterPage = () => {
  return (
    <>
      <AnimeSidebar />
      <div className="container">
        <AnimeFilter />
      </div>
    </>
  );
};
