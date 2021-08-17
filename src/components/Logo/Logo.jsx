import "./logo-styles.css";
import { LogoSvg } from "../../assets";
import { Link } from "react-router-dom";

export const Logo = ({ size }) => {
  return (
    <Link className={`text-link`} to={`/`}>
      <div className={`branding`}>
        <div className={`logo`}>
          <LogoSvg size={size} />
        </div>
      </div>
    </Link>
  );
};
