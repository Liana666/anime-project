import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import gif from "../../img/oni.gif";
import { LoginAndRegister } from "../../hoc/LoginAndRegister";

export const LoginPage = () => {
  return (
    <>
      <img className="videoImg" src={gif} alt="" />

      <div className="videoContainer">
        <div className="videoWrapper">
          <div className="videoLogo">AniPlay</div>

          <LoginAndRegister firebaseFunction={signInWithEmailAndPassword} />

          <p className="linkRegister">
            Or <Link to="/register">register</Link>
          </p>
        </div>
      </div>
    </>
  );
};
