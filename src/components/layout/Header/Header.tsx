import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { auth } from "../../firebase/firebase";
import { useAppDispatch } from "../../../hooks/useReduxTypes";
import { login } from "../../../store/slices/userSlice";

import "./Header.css";

import { LogoutIcon } from "../../svg/LogoutIcon";

export const Header = () => {
  const dispatch = useAppDispatch();
  const [emailUser, setEmailUser] = useState<string | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setEmailUser(userAuth.email);
        dispatch(login(userAuth.email));
      }
    });
  }, [auth, dispatch]);

  const signOut = () => {
    auth.signOut();
    dispatch(login(null));
    setEmailUser(null);
  };

  return (
    <header>
      <div className="header">
        <NavLink to="/">
          <div className="header__logo">AniPlay</div>
        </NavLink>
        <div className="header__links">
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/history">History</NavLink>
        </div>

        <div className="header__links">
          {emailUser ? (
            <>
              <span>Hi, {emailUser}</span>
              <div onClick={signOut} className="header__btn-logout">
                <LogoutIcon />
              </div>
            </>
          ) : (
            <>
              <div className="header__btn-logout">
                <NavLink to="/login">Login</NavLink>
              </div>
              <div className="header__btn-logout">
                <NavLink to="/register">Register</NavLink>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
