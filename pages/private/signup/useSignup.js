import { useReducer } from "react";
import { signupReducer } from "./signupReducer";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../contexts";
import { initialSignupState, validateSignupForm } from "../utils";

export const useSignup = () => {
  const [signupState, signupDispatch] = useReducer(
    signupReducer,
    initialSignupState
  );
  console.log(signupState);

  const navigate = useNavigate();
  const location = useLocation();

  const { signupUser } = useAuth();

  function setFirstName(e) {
    signupDispatch({ type: "SET_FIRST_NAME", payload: e.target.value });
  }

  function setLastName(e) {
    signupDispatch({ type: "SET_LAST_NAME", payload: e.target.value });
  }

  function setEmail(e) {
    signupDispatch({ type: "SET_EMAIL", payload: e.target.value });
  }

  function setPassword(e) {
    signupDispatch({ type: "SET_PASSWORD", payload: e.target.value });
  }

  function setConfirmPassword(e) {
    signupDispatch({ type: "SET_CONFIRM_PASSWORD", payload: e.target.value });
  }

  function setStatus(status) {
    signupDispatch({ type: "SET_STATUS", payload: status });
  }

  function resetForm() {
    signupDispatch({ type: "RESET_FORM" });
  }

  function setError(error) {
    signupDispatch({ type: "SET_ERROR", payload: { message: error.message } });
  }

  function toggleShowPassword() {
    signupDispatch({ type: "TOGGLE_SHOW_PASSWORD" });
  }

  async function onSignupClicked(e) {
    e.preventDefault();
    const { firstname, lastname, email, password } = signupState;
    const { isSignupFormValid, message } = validateSignupForm(signupState);

    if (!isSignupFormValid) {
      return setError({ message });
    }

    try {
      setStatus("pending");
      const name = `${firstname} ${lastname}`;
      const response = await signupUser(name, email, password);
      if (response.success) {
        setStatus("success");
        resetForm();
        return navigate(location.state?.from ? location.state.from : "/");
      }
      return setError(response);
    } catch (error) {
      console.log("signup error", error);
      setError({ message: "Something went wrong." });
    }
  }

  return {
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setConfirmPassword,
    onSignupClicked,
    toggleShowPassword,
    signupState,
  };
};
