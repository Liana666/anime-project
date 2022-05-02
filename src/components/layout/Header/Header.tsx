import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/firebase";
import { useAppDispatch } from "../../../hooks/useReduxTypes";
import { login } from "../../../store/slices/userSlice";

import "./Header.css";

import { LogoutIcon } from "../../svg/LogoutIcon";

export const Header = () => {
  const navigate = useNavigate();
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
    navigate("/login");
  };

  return (
    <header>
      <div className="header">
        <NavLink to="/">
          <div className="header__logo">アニ/Ani</div>
        </NavLink>

        {emailUser ? (
          <>
            <div className="header__links">
              <NavLink to="/favorites">お気に入り/Favorites</NavLink>
              <NavLink to="/history">物語/History</NavLink>
            </div>
            <div className="header__links">
              <span>Hi, {emailUser}</span>
              <div onClick={signOut} className="header__btn-logout">
                <LogoutIcon />
              </div>
            </div>
          </>
        ) : (
          <div className="header__links">
            <div className="header__btn-logout">
              <NavLink to="/login">Login</NavLink>
            </div>
            <div className="header__btn-logout">
              <NavLink to="/register">Register</NavLink>
            </div>
          </div>
        )}

        {/* <div className="header__links">
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
        </div> */}
      </div>
    </header>
  );
};
