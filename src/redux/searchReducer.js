const initialState = { search: "" };

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_SEARCH_VALUES":
      return action.payload;
    default:
      return "";
  }
}
