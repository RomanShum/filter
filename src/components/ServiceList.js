import { useSelector, useDispatch } from "react-redux";

export default function ServiceList() {
  let items = useSelector((store) => store.listReducer);
  const filter = useSelector((store) => store.searchReducer);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch({ type: "CHANGE_SEARCH_VALUES", payload: "" });
    dispatch({ type: "DELETE", payload: id });
  };
  const handleEdit = (id) => {
    let edit_item = items.filter((item) => item.id === id);
    let value = edit_item[0].name;
    let price = edit_item[0].price;
    dispatch({ type: "CHANGE_SEARCH_VALUES", payload: "" });
    dispatch({
      type: "EDIT",
      payload: { value, price },
    });
    dispatch({
      type: "IS_EDIT",
      payload: { edit: 1, id: id },
    });
    dispatch({
      type: "SET_ID",
      payload: { edit: 1, id: id },
    });
  };

  if (filter !== "") {
    items = items.filter((i) => i.name.indexOf(filter) !== -1);
  }

  return (
    <ul>
      {items &&
        items.map((o) => (
          <li key={o.id} style={{ marginTop: 10 }}>
            <div style={{ display: "inline-block", width: 200 }}>{o.name}</div>
            <div style={{ display: "inline-block", width: 100 }}>{o.price}</div>
            <button onClick={() => handleEdit(o.id)}>Ред</button>
            <button onClick={() => handleRemove(o.id)}>X</button>
          </li>
        ))}
    </ul>
  );
}
