import { NavBar } from "../../../components";
import { useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ROUTE_SIGN_UP } from "../../../utils/app-routes";
import { useLogin } from "./useLogin";
import { useAuth } from "../../../contexts";
import "../form-styles.css";

export const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { isUserLoggedIn } = useAuth();

  const login = useLogin();
  const { status, error } = login.loginState;

  const focusInput = useRef(null);

  useEffect(() => {
    isUserLoggedIn && navigate(state?.from || "/");
    focusInput.current && focusInput.current.focus();
  }, [focusInput, isUserLoggedIn]);

  return (
    <>
      <NavBar />
      <main className="main-container">
        <section className="login-container">
          <h1 className="text-2xl mb-2 text-gray-200">Log in</h1>
          <form onSubmit={login.onLoginClicked}>
            {
              <p className="mb-2 text-red-500">
                {status === "error" ? `• ${error.message}` : ""}
              </p>
            }
            <p className="mb-2 text-gray-300">Email</p>
            <input
              onChange={login.setEmail}
              ref={focusInput}
              placeholder="Email"
              type="text"
              className="txt-input"
            />
            <p className="mb-2 text-gray-300">Password</p>
            <input
              type="password"
              placeholder="Password"
              onChange={login.setPassword}
              className="txt-input"
            />
            <input
              className="button button-primary mb-4"
              type="submit"
              value={`${status === "pending" ? "Logging in..." : "Log in"}`}
            />
          </form>
          <button
            className="button button-primary mb-4"
            onClick={login.onGuestLoginClicked}
          >
            {status === "pending" ? "Logging in..." : "Log in as a guest"}
          </button>

          <div className="flex-c">
            <p className="mr-2 text-gray-300">Don't have an account?</p>
            <Link to={ROUTE_SIGN_UP} className="text-link font-bold">
              <p>Sign up</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};
