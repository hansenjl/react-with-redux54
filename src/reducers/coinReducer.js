export default function coinReducer(state = {total: 0}, action) {
    switch (action.type) {
      case "QUARTER":
        return {total: state.total + 25};
      case "DIME":
        return {total: state.total + 10};
      case "NICKEL":
        return {total: state.total + 5};
      case "PENNY":
        return {total: state.total + 1};
      default:
        return state;
    }
  }