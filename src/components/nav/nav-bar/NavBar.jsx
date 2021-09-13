import "./navbar-styles.css";
import { SearchBar } from "../search-bar/SearchBar";
import { Logo } from "../../logo/Logo";
import { FiUser } from "react-icons/fi";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <section className="navbar-container">
        <div className={`logo flex-c`}>
          <Logo size={25} />
        </div>
        <div className={`searchbar-container flex-c`}>
          <SearchBar />
        </div>
      </section>
    </nav>
  );
};
