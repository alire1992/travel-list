/* eslint-disable react/prop-types */
function Stats({ items }) {
  const numOfPacked = items?.reduce(
    (acc, cur) => (cur.packed ? (acc += 1) : acc),
    0
  );
  const percentPacked = Math.round((numOfPacked / items.length) * 100) || 0;

  return (
    <footer className="stats">
      <em>
        💼 You have {items?.length} {items?.length > 1 ? "items" : "item"} on
        your list, and you already packed {numOfPacked} ({percentPacked}%)
      </em>
    </footer>
  );
}

export default Stats;
