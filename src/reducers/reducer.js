const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEMS":
      let newState = [...state, ...action.items];
      return newState;
    default:
      return state;
  }
};

export default reducer;
