/* eslint-disable react/prop-types */
import { useState } from "react";

function Form({ setItems }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handeleSubmit(e) {
    e.preventDefault();
    if (item && quantity) {
      const newItem = {
        id: new Date().getTime(),
        quantity,
        description: item,
        packed: false,
      };
      setItems((s) => [...s, newItem]);
      setItem("");
      setQuantity(1);
    }
  }
  return (
    <form className="add-form" onSubmit={(e) => handeleSubmit(e)}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
