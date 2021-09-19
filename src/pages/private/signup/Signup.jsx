import { NavBar } from "../../../components";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ROUTE_LOGIN } from "../../../utils/appRoutes";
import { useAuth } from "../../../contexts";
import { useSignup } from "./useSignup";
import "../form-styles.css";
import { HamburgerMenu } from "../../../components/nav/nav-bar/HamburgerMenu";

export const Signup = () => {
  const { isUserLoggedIn } = useAuth();

  const signup = useSignup();
  const { status, error } = signup.signupState;

  const focusInput = useRef(null);

  useEffect(() => {
    focusInput.current && focusInput.current.focus();
  }, [focusInput, isUserLoggedIn]);

  return (
    <>
      <NavBar />
      <main className="main-container">
        <section className="login-container">
          <h1 className="text-2xl mb-4 text-gray-700">Sign up</h1>
          <form onSubmit={signup.onSignupClicked}>
            {
              <p className="mb-2 text-red-500">
                {status === "error" ? `• ${error.message}` : ""}
              </p>
            }
            <section className="flex">
              <div className="mr-2">
                <p className="mb-2 text-gray-700">First name</p>
                <input
                  onChange={signup.setFirstName}
                  ref={focusInput}
                  placeholder="First name"
                  type="text"
                  className="txt-input"
                />
              </div>
              <div>
                <p className="mb-2 text-gray-700">Last name</p>
                <input
                  onChange={signup.setLastName}
                  placeholder="Last name"
                  type="text"
                  className="txt-input"
                />
              </div>
            </section>
            <p className="mb-2 text-gray-700">Email</p>
            <input
              onChange={signup.setEmail}
              placeholder="Email"
              type="text"
              className="txt-input"
            />
            <p className="mb-2 text-gray-700">Password</p>
            <input
              type="password"
              placeholder="Password"
              onChange={signup.setPassword}
              className="txt-input"
            />
            <p className="mb-2 text-gray-700">Confirm Password</p>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={signup.setConfirmPassword}
              className="txt-input"
            />
            <input
              className="login-button"
              type="submit"
              value={`${status === "pending" ? "Signing up..." : "Sign up"}`}
            />
          </form>

          <div className="flex-c">
            <p className="mr-2 text-gray-700">Already have an account?</p>
            <Link to={ROUTE_LOGIN} className="text-link font-bold">
              <p>Log in</p>
            </Link>
          </div>
        </section>
      </main>
      <HamburgerMenu />
    </>
  );
};
