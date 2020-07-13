export const initSession = (dispatch, firebase, email, password) => {
  return new Promise((resolve, reject) => {
    firebase.auth.signInWithEmailAndPassword(email, password).then((auth) => {
      firebase.db
        .collection("Users")
        .doc(auth.user.uid)
        .get()
        .then((doc) => {
          const userDB = doc.data();
          dispatch({
            type: "INIT_SESSION",
            payload: {
              user: userDB,
              logged: true,
            },
          });
          resolve();
        });
    });
  });
};
