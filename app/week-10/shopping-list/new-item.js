"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [item, setItem] = useState({
    name: "",
    quantity: 1,
    category: "",
  });

  // Quantity Button Functions
  const increment = (e) => {
    e.preventDefault();
    if (item.quantity < 20) {
      setItem({ ...item, quantity: item.quantity + 1 });
    }
  };

  const decrement = (e) => {
    e.preventDefault();
    if (item.quantity !== 1) {
      setItem({ ...item, quantity: item.quantity - 1 });
    }
  };

  // Event Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.category === "") {
      noCategorySel = true;
    } else {
      onAddItem({ ...item, quantity: item.quantity });
    }
    setItem({ name: "", quantity: 1, category: "" });
  };

  const handleNameChange = (e) => {
    setItem({ ...item, name: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setItem({ ...item, category: e.target.value });
  };

  return (
    <div>
      <div className="items-center justify-center flex">
        <h2 className="ml-30 text-2xl font-bold mb-3">Add Item</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="flex w-full h-full flex-col items-center justify-center">
          {/* Item Name */}
          <div className="flex justify-center p-2 mb-2 mt-2 items-center w-full h-1/2 bg-slate-900 rounded-lg">
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleNameChange(e)}
              className="w-full h-full pl-4 mb-2 mt-2 font-semibold text-base bg-slate-900 border-slate-900 rounded-lg"
              placeholder="Item name"
              required
            ></input>
          </div>

          {/* Category Selection */}
          <div className="flex justify-center p-2 mb-2 mt-2 items-center w-full h-1/2 bg-slate-900 rounded-lg">
            <select
              value={item.category}
              onChange={(e) => handleCategoryChange(e)}
              className="w-full h-full pl-3 mb-2 mt-2 font-semibold text-base bg-slate-900 border-slate-900 rounded-lg"
            >
              <option value="" disabled>
                Category
              </option>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen Foods">Frozen Foods</option>
              <option value="canned Goods">Canned Goods</option>
              <option value="dry Goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>"
            </select>
          </div>

          {/* Quantity Button */}
          <div className="flex flex-row justify-center p-2 mb-2 mt-2 items-center w-full h-1/2 bg-slate-900 rounded-lg">
            <p className="p-2 ml-2 w-1/3 font-bold text-lg">{item.quantity}</p>
            <div className="flex flex-row flex-grow w-2/3">
              <button
                onClick={(e) => decrement(e)}
                className={`flex-grow mr-1 font-bold text-xl rounded-lg 
                                      ${
                                        item.quantity === 1
                                          ? "bg-slate-500 text-white disabled"
                                          : "text-black bg-indigo-300 hover:bg-indigo-600 active:bg-indigo-400"
                                      }`}
              >
                -
              </button>
              <button
                onClick={(e) => increment(e)}
                className={`flex-grow font-bold text-xl rounded-lg 
                                      ${
                                        item.quantity === 20
                                          ? "bg-slate-500 text-white disabled"
                                          : "text-black bg-indigo-300 hover:bg-indigo-600 active:bg-indigo-400"
                                      }`}
              >
                +
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="p-1 w-full mt-2 font-bold text-lg rounded-lg
        text-black bg-indigo-300 hover:bg-indigo-600 active:bg-indigo-400"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
