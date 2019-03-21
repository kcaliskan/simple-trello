export const createProject = project => {
  return (dispacth, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Kaan",
        authorLastName: "Caliskan",
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispacth({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispacth({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
