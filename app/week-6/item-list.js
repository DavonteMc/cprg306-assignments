"use client";

import itemData from "./items.json"; // automatically converts the json to array
import Item from "./item";
import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");
  let items = [...itemData];

  items.sort((a, b) => a.name.localeCompare(b.name));

  const handleSortSelection = (e) => {
    setSortBy(e);
    if (e === "name") {
      items.sort((a, b) => a.name.localeCompare(b.name));
      return items;
    }
    if (e === "category") {
      items.sort((a, b) => a.category.localeCompare(b.category));
      return items;
    }
  };

  const groupByCategory = (array, objAttribute) => {
    return array.reduce((acc, obj) => {
      const objAttributeValue = obj[objAttribute];
      if (!acc[objAttributeValue]) {
        acc[objAttributeValue] = [];
      }

      // simplify for only one category i.e. item.category to sort by
      // Object.keys(obj)
      //   returns -- The keys/attributes of the object

      // Object.keys(obj) - then isolate and sort the individual values

      // Object.values(obj)
      //   returns -- The values of the object

      acc[objAttributeValue].push(obj);
      return acc;
    }, {});
  };

  const itemsByCategory = groupByCategory(items, "category");

  return (
    <div>
      <div className="w-3/4">
        <h2>Sort By:</h2>
        <button
          className={`w-1/3 ${sortBy === "name" ? "bg-slate-800" : ""}`}
          onClick={() => {
            handleSortSelection("name");
          }}
        >
          Name
        </button>
        <button
          className={`w-1/3 ${sortBy === "category" ? "bg-slate-800" : ""}`}
          onClick={() => {
            handleSortSelection("category");
          }}
        >
          Category
        </button>
        <button
          className={`w-1/3 ${sortBy === "group" ? "bg-slate-800" : ""}`}
          onClick={() => {
            handleSortSelection("group");
          }}
        >
          Group Category
        </button>
        <ul>
          {sortBy === "name" ? items.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />)) : items.sort((a, b) => a.category.localeCompare(b.category)).map((item) => (
              <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
