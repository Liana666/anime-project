import PropTypes from "prop-types";

type Props = {
  updateRandomAnime: () => void;
};

export const UpdateAnime: React.FC<Props> = ({ updateRandomAnime }) => {
  return (
    <button className="filter-btn" onClick={updateRandomAnime}>
      Update random anime
    </button>
  );
};

UpdateAnime.propTypes = {
  updateRandomAnime: PropTypes.func.isRequired,
};
