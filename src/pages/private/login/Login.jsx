import { NavBar } from "../../../components";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTE_SIGN_UP } from "../../../utils/appRoutes";
import { useLogin } from "./useLogin";
import "../form-styles.css";
import { NavBarMobile } from "../../../components/nav/nav-bar/NavBarMobile";
import { HamburgerMenu } from "../../../components/nav/nav-bar/HamburgerMenu";

export const Login = () => {
  const login = useLogin();
  const { status, error } = login.loginState;

  const focusInput = useRef(null);

  useEffect(() => {
    focusInput.current && focusInput.current.focus();
  }, []);

  return (
    <>
      <NavBar />
      <main className="main-container">
        <section className="login-container">
          <h1 className="text-2xl mb-2 text-gray-800">Log in</h1>
          <form onSubmit={login.onLoginClicked}>
            {
              <p className="mb-2 text-red-500">
                {status === "error" ? `• ${error.message}` : ""}
              </p>
            }
            <p className="mb-2 text-gray-700">Email</p>
            <input
              onChange={login.setEmail}
              ref={focusInput}
              placeholder="Email"
              type="text"
              className="txt-input"
            />
            <p className="mb-2 text-gray-700">Password</p>
            <input
              type="password"
              placeholder="Password"
              onChange={login.setPassword}
              className="txt-input"
            />
            <input
              className="btn btn-login mb-4 text-white"
              type="submit"
              value={`${status === "pending" ? "Logging in..." : "Log in"}`}
            />
          </form>
          <button
            className="btn btn-login text-white"
            onClick={login.onGuestLoginClicked}
          >
            {status === "pending" ? "Logging in..." : "Log in as a guest"}
          </button>

          <div className="flex-c">
            <p className="mr-2 text-gray-600 mt-4">Don't have an account?</p>
            <Link
              to={ROUTE_SIGN_UP}
              className="text-link font-bold text-blue-600"
            >
              <p className={`mt-4`}>Sign up</p>
            </Link>
          </div>
        </section>
        <HamburgerMenu />
      </main>
    </>
  );
};
