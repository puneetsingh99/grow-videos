import { initialSignupState } from "../utils";

export const signupReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstname: action.payload };

    case "SET_LAST_NAME":
      return { ...state, lastname: action.payload };

    case "SET_EMAIL":
      return { ...state, email: action.payload };

    case "SET_PASSWORD":
      return { ...state, password: action.payload };

    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };

    case "TOGGLE_SHOW_PASSWORD":
      return { ...state, showPassword: !state.showPassword };

    case "SET_STATUS":
      return { ...state, status: action.payload };

    case "INVALID_FORM":
      return { ...state, error: action.payload };

    case "SET_ERROR":
      return { ...state, status: "error", error: action.payload };

    case "RESET_FORM":
      return { initialSignupState };

    default:
      return state;
  }
};
