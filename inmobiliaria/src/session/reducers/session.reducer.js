const sessionReducer = (state, action) => {
  switch (action.type) {
    case "INIT_SESSION":
      return {
        ...state,
        user: action.payload.user,
        logged: action.payload.logged,
      };
    case "CHANGE_SESSION":
      return {
        ...state,
        user: action.payload.user,
        logged: action.payload.logged,
      };
    case "LOGOUT":
      return {
        ...state,
        user: action.payload.user,
        logged: action.payload.logged,
      };
    default:
      return state;
  }
};

export default sessionReducer;
