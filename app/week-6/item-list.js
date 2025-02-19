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
  };

  const groupByCategory = (array, key) => {
    return array.reduce((acc, obj) => {
      const keyValue = obj[key];
      if (!acc[keyValue]) {
        acc[keyValue] = [];
      }
      acc[keyValue].push(obj);
      return acc;
    }, {});
  };

  const itemsByCategory = groupByCategory(items, "category");

  return (
    <div>
      <div className="w-full">
        <h2 className="text-base mb-3">Sort By:</h2>
        <div className="items-center mb-3 text-lg">
          <button
            className={`w-1/3 p-2 border-slate-900 border-2 ${
              sortBy === "name" ? "bg-slate-800" : ""
            }`}
            onClick={() => {
              handleSortSelection("name");
            }}
          >
            Name
          </button>
          <button
            className={`w-1/3 p-2 border-slate-900 border-2 ${
              sortBy === "category" ? "bg-slate-800" : ""
            }`}
            onClick={() => {
              handleSortSelection("category");
            }}
          >
            Category
          </button>
          <button
            className={`w-1/3 p-2 border-slate-900 border-2 ${
              sortBy === "group" ? "bg-slate-800" : ""
            }`}
            onClick={() => {
              handleSortSelection("group");
            }}
          >
            Group Category
          </button>
        </div>
        <ul>
          {sortBy === "name"
            ? items.map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))
            : sortBy === "category"
            ? items
                .sort((a, b) => a.category.localeCompare(b.category))
                .map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                  />
                ))
            : Object.keys(itemsByCategory)
                .sort((a, b) => a.localeCompare(b))
                .map((category) => (
                  <div
                    key={category}
                    className="flex-col pb-1 mb-3 bg-slate-800"
                  >
                    <p className="pt-1 pb-1 pl-2 text-xl font-semibold capitalize">
                      {category}
                    </p>
                    {itemsByCategory[category]
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((item) => (
                        <Item
                          key={item.id}
                          name={item.name}
                          quantity={item.quantity}
                          category={item.category}
                        />
                      ))}
                  </div>
                ))}
        </ul>
      </div>
    </div>
  );
}
