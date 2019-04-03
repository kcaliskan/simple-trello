const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authError: null
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        authError: "Login Failed"
      };
    case "SIGNOUT_SUCCESS":
    case "SIGNUP_SUCCESS":
      return {
        ...state
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        authError: action.err
      };
    default:
      return state;
  }
};

export default authReducer;
