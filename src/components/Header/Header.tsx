import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase";
import { LogoutIcon } from "../svg/LogoutIcon";
import "./Header.css";

export const Header = () => {
  const [userEmail, setUseEmail] = useState<any>(null);
  const email = auth.currentUser?.email;

  useEffect(() => {
    setUseEmail(email);
  }, [email]);

  const signOut = () => {
    auth.signOut();
    setUseEmail(null);
  };

  console.log(email);

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
              Hi, {email}
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
