"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [item, setItem] = useState({
    id: 0,
    name: "",
    quantity: 1,
    category: "",
  });

  let noCategorySel = false;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.category === "") {
      noCategorySel = true;
    } else {
      onAddItem({ ...item, quantity: item.quantity });
    }
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
        <h2 className="ml-30 text-xl font-bold mb-3">Add Item</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex">
        <div>
          {/* Item Name */}
          <input
            type="text"
            value={item.name}
            onChange={(e) => handleNameChange(e)}
            className="w-60 h-12 p-2 pl-4 font-semibold text-lg bg-slate-900 border-slate-900 rounded-3xl"
            placeholder="Item name"
            required
          ></input>

          {/* Type Selection */}
          <select
            value={item.category}
            onChange={(e) => handleCategoryChange(e)}
            className="w-60 h-12 p-3 mt-2 font-semibold text-lg  bg-slate-900 border-slate-900 rounded-3xl"
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

        {/* Item Quantity and Type */}
        <div>
          {/* Quantity Button */}
          <div className="flex flex-row justify-center p-4 items-center w-60 h-12 bg-slate-900 rounded-3xl">
            <p className="flex-grow p-2 ml-2 mr-3 font-bold text-lg">
              {item.quantity}
            </p>
            <div className="flex flex-row">
              <button
                onClick={(e) => decrement(e)}
                className={`p-1 h-9 w-20 mr-1 font-bold text-xl rounded-3xl 
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
                className={`p-1 h-9 w-20 font-bold text-xl rounded-3xl 
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
            className="p-1 w-60 h-10 mt-2 font-semibold text-xl rounded-3xl
        text-black bg-indigo-300 hover:bg-indigo-600 active:bg-indigo-400"
          >
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
}
