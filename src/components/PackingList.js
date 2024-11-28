import Item from "./Item";
export default function PackingList({
  items,
  searchQuery,
  onSearch,
  onSort,
  onClear,
  onDeleteItem,
  onUpdateItem,
}) {
  const filteredItems = items.filter((item) =>
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="list">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={(e) => onSearch(e.target.value)}
          className="search-bar"
          style={{
            margin: "5px",
            padding: "5px",
            width: "50%",
          }}
        />
        <select
          onChange={(e) => onSort(e.target.value)}
          style={{
            margin: "5px",
            padding: "5px",
            borderRadius: "10rem",
            backgroundColor: "#ffebb3",
            color: "#5a3e2b",
          }}
        >
          <option value="input">Sort by Input Order</option>
          <option value="az">Sort by A-Z</option>
          <option value="za">Sort by Z-A</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
    
      </div>

      <ul>
        {filteredItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}
