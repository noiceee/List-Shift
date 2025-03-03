import { useEffect, useState } from "react";

export default function List ({
  listName,
  items,
  setItem,
  selectedItems,
  setSelectedItems,
}) {
  // const [items, setItem] = useState(["Option1", "Option2", "Option3"]);
  // const [selectedItems, setSelectedItems] = useState([]);

  function handleAdd() {
    const newValue = prompt("Enter Value");
    setItem((prev) => [...prev, newValue]);
    setSelectedItems((prev) => [...prev, newValue]);
  }

  function handleOptionChange(event, item) {
    if (event.target.checked) {
      setSelectedItems((prev) => {
        // This Works Now
        if (prev.length && prev.includes(item)) {
          return prev.filter((i) => i !== item);
        }
        return items.filter((i) => i !== item);
      });
    } else {
      setSelectedItems((prev) => [...prev, item]);
    }
    // console.log(selectedItems);
  }

  function selectAll(e) {
    if (e.target.checked) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items);
    }
  }

  console.log("Idhar", selectedItems);

  return (
    <div className="list">
      <h2>{listName}</h2>
      <div className="list-container">
        <div>
          <input
            type="checkbox"
            id={"select-all" + listName}
            onChange={(e) => {
              selectAll(e);
            }}
            checked={selectedItems?.length === 0}
          />
          <label htmlFor={"select-all" + listName}>Select All</label>
        </div>
        <button onClick={handleAdd}>Add</button>
        <div className="option-list">
          {items.map((item, key) => {
            return (
              <>
                <input
                  key={key}
                  id={key + item}
                  type="checkbox"
                  checked={!selectedItems?.includes(item) ? true : false}
                  onChange={(e) => handleOptionChange(e, item)}
                />
                <label htmlFor={key + item}>{item}</label>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
