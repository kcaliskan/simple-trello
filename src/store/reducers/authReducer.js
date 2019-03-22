const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login Success");
      return {
        ...state,
        authError: null
      };
    case "LOGIN_ERROR":
      console.log("Error:" + action.err);
      return {
        ...state,
        authError: "Login Failed"
      };
    case "SIGNOUT_SUCCESS":
      console.log("SIGNOUT_SUCCESS");
    case "SIGNUP_SUCCESS":
      console.log("SIGNUP_SUCCESS");
      return {
        ...state,
        authError: "Login Failed"
      };
    case "SIGNUP_ERROR":
      console.log("SIGNUP_ERROR");
      return {
        ...state,
        authError: action.err
      };
    default:
      return state;
  }
};

export default authReducer;
