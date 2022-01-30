import { useSelector, useDispatch } from "react-redux";

export default function ServiceSearch() {
  const dispatch = useDispatch();
  const search_val = useSelector((store) => store.searchReducer);
  const handleChange = (e) => {
    dispatch({ type: "CHANGE_SEARCH_VALUES", payload: e.target.value });
  };

  return <input name="search" value={search_val} onChange={handleChange} />;
}
