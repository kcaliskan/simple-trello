export const signIn = credentials => {
  return (dispacth, getState, { getFirebase }) => {
    // make async call to database
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispacth({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispacth({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = credentials => {
  return (dispacth, getState, { getFirebase }) => {
    // make async call to database
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispacth({ type: "SIGNOUT_SUCCESS" });
      });
  };
};
