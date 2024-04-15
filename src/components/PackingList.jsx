/* eslint-disable react/prop-types */
import { useState } from "react";
import Item from "./Item";

function PackingList({ items, setItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems = [];

  switch (sortBy) {
    case "description":
      sortedItems = items
        ?.slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedItems = items
        ?.slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
    default:
      sortedItems = items;
  }

  function clearList() {
    const confirmed = window.confirm("Are you sure to delete all items?");
    if (confirmed) setItems([]);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => (
          <Item key={item.id} item={item} setItems={setItems} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
