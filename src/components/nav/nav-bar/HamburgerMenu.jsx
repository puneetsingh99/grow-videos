import { useAuth } from "../../../contexts";
import { useHamburger } from "./HamburgerContext";
import "./navbar-styles.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AiOutlineHistory } from "react-icons/ai";

import { ROUTE_HISTORY, ROUTE_LOGIN } from "../../../utils/appRoutes";

export const HamburgerMenu = () => {
  const { showHamburger, setShowHamburger } = useHamburger();
  const { isUserLoggedIn, logout } = useAuth();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <section className={`hamburger ${showHamburger && "show-hamburger"}`}>
      <div className={`hamburger-menu`}>
        <button
          className={`${
            isUserLoggedIn ? "logout-button" : "login-button"
          } hamburger-menu-item`}
          onClick={() => {
            if (isUserLoggedIn) {
              logout();
            } else {
              navigate(ROUTE_LOGIN, { state: { from: pathname } });
            }
            setShowHamburger(false);
          }}
        >
          {isUserLoggedIn ? "Log out" : "Login"}
        </button>

        <Link to={ROUTE_HISTORY} className={`text-link`}>
          <li
            onClick={() => setShowHamburger(false)}
            className={`sidebar-menu-item  hamburger-menu-item ${
              pathname === ROUTE_HISTORY && "highlighted"
            }`}
          >
            <AiOutlineHistory size={22} /> <p> History </p>
          </li>
        </Link>
      </div>
      <div
        className={`hamburger-empty-space`}
        onClick={() => setShowHamburger(false)}
      ></div>
    </section>
  );
};
