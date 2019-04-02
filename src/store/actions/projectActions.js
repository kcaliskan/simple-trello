// export const createProject = project => {
//   return (dispacth, getState, { getFirebase, getFirestore }) => {
//     // make async call to database
//     const firestore = getFirestore();
//     const profile = getState().firebase.profile;
//     const userId = getState().firebase.auth.uid;
//     const collection = firestore.collection("projects").doc(document.id);
//     firestore
//       .collection("projects")
//       .add({
//         ...project,
//         authorFirstName: profile.firstName,
//         authorLastName: profile.lastName,
//         authorId: userId,
//         createdAt: new Date()
//       })
//       .then(() => {
//         dispacth({ type: "CREATE_PROJECT", project });
//         console.log(collection);
//       })
//       .catch(err => {
//         dispacth({ type: "CREATE_PROJECT_ERROR", err });
//       });
//   };
// };
import history from "../../history";

export const createProject = project => {
  return (dispacth, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userId = getState().firebase.auth.uid;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: userId,
        createdAt: new Date()
      })
      .then(docRef => {
        const updatedProject = { ...project, projectId: docRef.id };
        return updatedProject;
      })
      .then(updatedProject => {
        dispacth({ type: "CREATE_PROJECT", updatedProject });
        history.push(`/project/${updatedProject.projectId}`);
      })
      .catch(err => {
        dispacth({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
