import "./navbar-styles.css";
import { Searchbar, Logo, Avatar, NavPillList } from "../";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Logo />
        <div>
          <Searchbar />
        </div>
        <Avatar src={`https://i.pravatar.cc/300`} size={`m`} />
      </div>
    </nav>
  );
};
