import React, { useState } from "react";

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function Logo() {
  return <h1>My Travel List</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState(""); 
  const [quantity, setQuantity] = useState(1); 

  function handleSubmit(e) {
    e.preventDefault();

  
    if (!description) return;

    
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
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
    </form>
  );
}

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li
      style={{
        textDecoration: item.packed ? "line-through" : "none",
        margin: "5px",
      }}
    >
      {item.description} ({item.quantity})
    </li>
  );
}

function Stats({ items }) {
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = totalItems
    ? Math.round((packedItems / totalItems) * 100)
    : 0;

  return (
    <footer className="stats">
      <em>
        You have {totalItems} items in the list. You already packed {packedItems}{" "}
        ({packedPercentage}%).
      </em>
    </footer>
  );
}

function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]); 
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} /> 
      <PackingList items={items} />
      <Stats items={items} />
    </div>
  );
}

export default App;
