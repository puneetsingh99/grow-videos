import { Link } from "react-router-dom";
import "./login-styles.css";
import { useEffect, useRef } from "react";
import { LogoSvg } from "../../assets";

export const Signup = () => {
  const nameRef = useRef();
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <>
      <div className={`flex ml-4 p-4`}>
        <div className="logo-icon">
          <Link to="/" className={`text-link`}>
            <LogoSvg />
          </Link>
        </div>

        <div className="logo-name">
          <Link to="/" className={`text-link`}>
            <h1>Grow</h1>
          </Link>
        </div>
      </div>
      <div className={`auth-form-container`}>
        <article className={`auth-form`}>
          <h1 className={`form-title`}> {`Signup`} </h1>
          <div className={`input-text-container`}>
            <input
              type="text"
              name="name"
              id="name"
              ref={nameRef}
              placeholder="Name"
              className={`text-input`}
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className={`text-input`}
            />
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              className={`text-input`}
            />
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirm Password"
              className={`text-input`}
            />
          </div>

          <button className={`btn`}>{`Signup`}</button>
          <p className={`signup-link`}>
            {`Already have an account? `}
            <Link className={`text-link`} to={`/login`}>
              <span className={`dark-text`}>{`Login`}</span>
            </Link>
          </p>
        </article>
      </div>
    </>
  );
};
