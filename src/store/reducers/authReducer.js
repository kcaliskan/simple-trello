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
    default:
      return state;
  }
};

export default authReducer;
