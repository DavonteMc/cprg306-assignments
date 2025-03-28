"use client";

import Item from "./item";
import { useState } from "react";

export default function ItemList({ itemList, onIngrdntSelection }) {
  const [sortBy, setSortBy] = useState("name");
  let items = itemList === null ? null : [...itemList];
  let itemsByCategory = null;

  if (items !== null) {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Event Handler
  const handleSortSelection = (e) => {
    if (items !== null) {
      setSortBy(e);
    }
  };

  // Group By Category Function
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

  if (items !== null) {
    itemsByCategory = groupByCategory(items, "category");
  }

  return (
    <div className="mt-8">
      <div className="w-full">
        <div className="items-center justify-center flex">
          <h2 className="ml-30 text-2xl font-bold mb-3">Sort By</h2>
        </div>

        {/* Sorting Buttons */}
        <div className="flex items-center gap-2 mb-3 text-lg">
          {/* Sort By Name Button */}
          <button
            className={`w-1/3 p-2 rounded-xl hover:bg-indigo-600 active:bg-indigo-400 ${
              sortBy === "name"
                ? "bg-indigo-300  text-black font-semibold"
                : "bg-slate-900 text-white"
            }`}
            onClick={() => {
              handleSortSelection("name");
            }}
          >
            Name
          </button>
          {/* Sort By Category Button */}
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
          {/* Sort By Group Category Button */}
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

        {/* List of Items */}
        <div className="mt-10">
          <ul>
            {sortBy === "name" && items !== null
              ? items.map((item) => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onIngrdntSelection={onIngrdntSelection}
                  />
                ))
              : sortBy === "category" && items !== null
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
