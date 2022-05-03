import PropTypes from "prop-types";

import { Button } from "../shared";

type Props = {
  updateRandomAnime: () => void;
};

export const UpdateAnime: React.FC<Props> = ({ updateRandomAnime }) => {
  return (
    <Button text="random anime" size="large" onClick={updateRandomAnime} />
  );
};

UpdateAnime.propTypes = {
  updateRandomAnime: PropTypes.func.isRequired,
};
