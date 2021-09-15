import { useReducer } from "react";
import { loginReducer } from "./loginReducer";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts";
import { initialLoginState, validateLoginForm } from "../utils";

export const useLogin = () => {
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    initialLoginState
  );

  const navigate = useNavigate();
  const location = useLocation();

  const { loginUserWithCredentials } = useAuth();

  function setEmail(e) {
    loginDispatch({ type: "SET_EMAIL", payload: e.target.value });
  }

  function setPassword(e) {
    loginDispatch({ type: "SET_PASSWORD", payload: e.target.value });
  }

  function setStatus(status) {
    loginDispatch({ type: "SET_STATUS", payload: status });
  }

  function resetForm() {
    loginDispatch({ type: "RESET_FORM" });
  }

  function setError(error) {
    loginDispatch({ type: "SET_ERROR", payload: { message: error.message } });
  }

  function toggleShowPassword() {
    loginDispatch({ type: "TOGGLE_SHOW_PASSWORD" });
  }

  async function onLoginClicked(e) {
    e.preventDefault();
    const { email, password } = loginState;
    const { isLoginFormValid, message } = validateLoginForm(email, password);

    if (!isLoginFormValid) {
      return setError({ message });
    }

    try {
      setStatus("pending");
      const response = await loginUserWithCredentials(email, password);
      if (response.success) {
        setStatus("success");
        resetForm();
        return navigate(location.state?.from ? location.state.from : "/");
      }
      return setError(response);
    } catch (error) {
      console.log("login error", error);
      setError({ message: "Something went wrong." });
    }
  }

  async function onGuestLoginClicked() {
    try {
      setStatus("pending");
      const response = await loginUserWithCredentials(
        "puneet@gmail.com",
        "Puneet@123"
      );
      if (response.success) {
        setStatus("success");
        resetForm();
        return navigate(location.state?.from ? location.state.from : "/");
      }
      return setError(response);
    } catch (error) {
      console.log("login error", error);
      setError({ message: "Something went wrong." });
    }
  }

  return {
    setEmail,
    setPassword,
    onLoginClicked,
    onGuestLoginClicked,
    toggleShowPassword,
    loginState,
  };
};
