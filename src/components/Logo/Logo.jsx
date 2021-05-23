import "./logo-styles.css";
import { LogoSvg } from "../../assets";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link className={`text-link`} to={`/`}>
      <div className={`branding`}>
        <div className={`logo`}>
          <LogoSvg />
        </div>
        <div className={`brand-name`}>{`Grow`}</div>
      </div>
    </Link>
  );
};
