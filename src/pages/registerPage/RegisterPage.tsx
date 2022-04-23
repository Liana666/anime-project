import { Link } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { LoginAndRegister } from "../../hoc/LoginAndRegister";

import gif from "../../img/oni.gif";

export const RegisterPage = () => {
  return (
    <>
      <img className="videoImg" src={gif} alt="" />

      <div className="videoContainer">
        <div className="videoWrapper">
          <LoginAndRegister
            btnValue="Register"
            firebaseFunction={createUserWithEmailAndPassword}
          />

          <p className="linkRegister">
            Already have an account? <Link to="/">Sign in</Link>
          </p>
        </div>
      </div>
    </>
  );
};
