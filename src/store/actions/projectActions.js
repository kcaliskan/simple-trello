export const createProject = project => {
  return (dispacth, getState) => {
    dispacth({ type: "CREATE_PROJECT", project });
  };
};
