export default function Item({ item, onDeleteItem, onUpdateItem }) {
  return (
    <li
      style={{
        textDecoration: item.packed ? "line-through" : "none",
        margin: "5px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onUpdateItem(item.id)}
        style={{ marginRight: "10px" }}
      />
      {item.description} ({item.quantity})
      <button
        onClick={() => onDeleteItem(item.id)}
        style={{
          marginLeft: "10px",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        ❌
      </button>
    </li>
  );
}
