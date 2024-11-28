import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stat";

const initialItems = [
  { id: 1, description: "Shirt", quantity: 5, packed: false },
  { id: 2, description: "Pants", quantity: 2, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [searchQuery, setSearchQuery] = useState("");

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  const handleDeleteItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleUpdateItem = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (sortOption) => {
    const sortedItems = [...items];
    if (sortOption === "az") {
      sortedItems.sort((a, b) => a.description.localeCompare(b.description));
    } else if (sortOption === "za") {
      sortedItems.sort((a, b) => b.description.localeCompare(a.description));
    } else if (sortOption === "description") {
      sortedItems.sort((a, b) => a.description.length - b.description.length);
    } else if (sortOption === "packed") {
      sortedItems.sort((a, b) => a.packed - b.packed);
    } else {
      sortedItems.sort((a, b) => a.id - b.id); // Input order
    }
    setItems(sortedItems);
  };

  const handleClear = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all items?"
    );
    if (confirmClear) {
      setItems([]); 
      alert("All items cleared!");
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} onClear={handleClear} />
      <PackingList
        items={items}
        searchQuery={searchQuery}
        onSearch={handleSearch}
        onSort={handleSort}
        onClear={handleClear}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
