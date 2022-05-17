import { NavLink } from "react-router-dom";

import { LogoutIcon } from "../../svg/LogoutIcon";

import "./Header.css";

type Props = {
  emailUser: string | null;
  pathname: string;
  signOut: () => void;
};

export const Header: React.FC<Props> = ({ emailUser, pathname, signOut }) => {
  const isMain = pathname === "/" || pathname.includes('/filter/') || pathname.includes('/search/');

  return (
    <header>
      <div className={isMain ? "header header--main" : "header"}>
        <NavLink to="/">
          <div className="header__logo">アニ/Ani</div>
        </NavLink>

        {emailUser ? (
          <>
            <div className="header__links header__links--mob">
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
      </div>
    </header>
  );
};
