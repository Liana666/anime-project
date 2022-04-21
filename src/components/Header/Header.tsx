import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LogoutIcon } from "../svg/LogoutIcon";
import "./Header.css";

export const Header = () => {
  const [userEmail, setUseEmail] = useState<any>(null);
  const [authLocal, setAuthLocal] = useState();
  const auth = getAuth();

  // useEffect(() => {
  //   setAuthLocal()
  // })
  // useEffect(() => {
  //   console.log(auth.currentUser);
  //   setUseEmail(auth.currentUser ? auth.currentUser.email : null);
  // }, [auth.currentUser])




  // console.log(auth)

  const signOut = () => {
    auth.signOut();
    setUseEmail(null);
    localStorage.removeItem('auth');
  };

  return (
    <header>
      <div className="header">
        <NavLink to="/">
          <div className="header__logo">AniPlay</div>
        </NavLink>
        <div className="header__links">
          <NavLink to="/favorites">Favorites</NavLink>
          {/* <NavLink to="/login">Login</NavLink> */}
        </div>

        <div className="header__links">
          {userEmail && (
            <span style={{ fontSize: 15 }} className="header__email">
              Hi
            </span>
          )}
          {userEmail ? (
            <div onClick={signOut} className="header__btn-logout">
              <LogoutIcon />
            </div>
          ) : (
            <>
              <div onClick={signOut} className="header__btn-logout">
                <NavLink to="/login">Login</NavLink>
              </div>
              <div onClick={signOut} className="header__btn-logout">
                <NavLink to="/register">Register</NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
