/* eslint-disable react/prop-types */
function Item({ item, setItems }) {
  function handleChange() {
    setItems((items) =>
      items?.map((i) => (i.id === item.id ? { ...i, packed: !i.packed } : i))
    );
  }

  function handleDelete() {
    setItems((items) => items?.filter((i) => i.id !== item.id));
  }

  return (
    <li>
      <span>
        <input type="checkbox" onChange={handleChange} />
      </span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}

export default Item;
