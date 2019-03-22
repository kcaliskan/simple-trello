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

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};
