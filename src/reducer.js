const intialState = { count: 0 };

export function reducer(state = intialState, action) {
  switch (action.type) {
    case "ADD": {
      const copy = { ...state };
      copy.count = copy.count + 1;
      return copy;
    }

    case "MINUS":
      {
        const copy = { ...state };
        copy.count = copy.count - 1;
        return copy;
      }
      break;

    default:
      return state;
      break;
  }
}
