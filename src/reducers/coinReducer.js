export default function coinReducer(
  state = { total: 0, txt: "message" },
  action
) {
  switch (action.type) {
    case "QUARTER":
      return { ...state, total: state.total + 25 };
    case "DIME":
      return { ...state, total: state.total + 10 };
    case "NICKEL":
      return { ...state, total: state.total + 5 };
    case "PENNY":
      return { ...state, total: state.total + 1 };
    default:
      return state;
  }
}
