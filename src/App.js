import { useState } from "react";
import List from "./components/List";
import "./styles.css";

export default function App() {
  const [items1, setItem1] = useState(["Option1", "Option2", "Option3"]);
  const [selectedItems1, setSelectedItems1] = useState(items1);
  const [items2, setItem2] = useState(["Option4", "Option5", "Option6"]);
  const [selectedItems2, setSelectedItems2] = useState(items2);

  function moveUp() {
    setItem1([...new Set([...items1, ...selectedItems2])]);
    setSelectedItems1([...new Set([...selectedItems1, ...selectedItems2])]);
    setItem2(
      items2.filter((i) => {
        return !selectedItems2.includes(i);
      })
    );
  }

  function moveDown() {
    setItem2([...new Set([...items2, ...selectedItems1])]);
    setSelectedItems2([...new Set([...selectedItems2, ...selectedItems1])]);
    setItem1(
      items1.filter((i) => {
        return !selectedItems1.includes(i);
      })
    );
  }

  return (
    <div className="App">
      <div className="container">
        <List
          listName={"List1"}
          items={items1}
          setItem={setItem1}
          selectedItems={selectedItems1}
          setSelectedItems={setSelectedItems1}
        />
        <button onClick={moveUp}>Up</button>
        <button onClick={moveDown}>Down</button>
        <List
          listName={"List2"}
          items={items2}
          setItem={setItem2}
          selectedItems={selectedItems2}
          setSelectedItems={setSelectedItems2}
        />
      </div>
    </div>
  );
}
