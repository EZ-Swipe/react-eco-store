export const counterReducer = (state, action) => {
  switch (action.type) {
    case "decrement":
      return state - 1;

    case "increment":
      return state + 1;

    case "set":
      return action.payload;

    default:
      return state;
  }
};
