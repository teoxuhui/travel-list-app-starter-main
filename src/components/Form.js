import React, { useState } from "react";

export default function Form({ onAddItem, onClear }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem); 
    setDescription(""); 
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        style={{ margin: "5px", padding: "5px" }}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Item..."
        style={{ margin: "5px", padding: "5px" }}
      />
      <button type="submit" style={{ margin: "5px", padding: "5px" }}>
        Add
      </button>
      <button
        type="button"
        onClick={onClear} 
        style={{
          margin: "5px",
          padding: "5px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "10rem",
          fontWeight: "bold",
        }}
      >
        Clear All
      </button>
    </form>
  );
}
