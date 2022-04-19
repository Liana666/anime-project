import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import gif from "../../img/oni.gif";
import { LoginAndRegister } from "../../hoc/LoginAndRegister";

export const RegisterPage = () => {
  return (
    <>
      <img className="videoImg" src={gif} alt="" />

      <div className="videoContainer">
        <div className="videoWrapper">
          <LoginAndRegister firebaseFunction={createUserWithEmailAndPassword} />

          <p className="linkRegister">
            Already have an account? <Link to="/">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};
