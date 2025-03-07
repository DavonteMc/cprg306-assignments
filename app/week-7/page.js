"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState } from "react";


export default function Page() {
  const [items, setItems] = useState(itemData);

  const generateID = () => {
    let ids = items.map((item) => item.id);
    let newId = Math.max(...ids) + 1;
    return newId;
  };

  const handleAddItem = (item) => {
    setItems([...items, {...item, id: generateID()}]);
  };

  return (
    <body>
      <main className="p-4 items-center text-white bg-indigo-950 ">
        <h1 className="text-3xl font-bold p-2">Shopping List</h1>
        <div className="w-2/5 bg-gray-800 p-4 rounded-lg">
            <NewItem onAddItem={handleAddItem} />
            <ItemList itemList={items}/>
        </div>
      </main>
    </body>
  );
}

