"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ itemList, onIngrdntSelection }) {
  const [sortBy, setSortBy] = useState("name");
  let items = [...itemList]; // Use let when the value on the right side of the equals changes to something else

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
    <div className="mt-8">
      <div className="w-full">
        <div className="items-center justify-center flex">
          <h2 className="ml-30 text-2xl font-bold mb-3">Sort By</h2>
        </div>
        <div className="flex items-center gap-2 mb-3 text-lg">
          <button
            className={`w-1/3 p-2 rounded-xl hover:bg-indigo-600 active:bg-indigo-400 ${
              sortBy === "name" ? "bg-indigo-300  text-black font-semibold" : "bg-slate-900 text-white"
            }`}
            onClick={() => {
              handleSortSelection("name");
            }}
          >
            Name
          </button>
          <button
            className={`w-1/3 p-2 rounded-xl hover:bg-indigo-600 active:bg-indigo-400 ${
              sortBy === "category"
                ? "bg-indigo-300 text-black font-semibold"
                : "bg-slate-900 text-white"
            }`}
            onClick={() => {
              handleSortSelection("category");
            }}
          >
            Category
          </button>
          <button
            className={`w-1/3 p-2 rounded-xl hover:bg-indigo-600 active:bg-indigo-400 ${
              sortBy === "group"
                ? "bg-indigo-300  text-black font-semibold"
                : "bg-slate-900 text-white"
            }`}
            onClick={() => {
              handleSortSelection("group");
            }}
          >
            Group Category
          </button>
        </div>
        <div className="mt-10">
          <ul>
            {sortBy === "name"
              ? items.map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onIngrdntSelection={onIngrdntSelection}
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
                      onIngrdntSelection={onIngrdntSelection}
                    />
                  ))
              : Object.keys(itemsByCategory)
                  .sort((a, b) => a.localeCompare(b))
                  .map((category) => (
                    <div
                      key={category}
                      className="flex-col pb-1 mb-3 bg-slate-800"
                    >
                      <p className="pt-1 pb-1 pl-2 text-xl ml-3 mr-3 font-semibold border-b-2 border-b-gray-400 capitalize ">
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
                            onIngrdntSelection={onIngrdntSelection}
                          />
                        ))}
                    </div>
                  ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
