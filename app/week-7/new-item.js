"use client";

import { useState } from "react";

export default function NewItem({onAddItem}) {
  const [item, setItem] = useState({id: 0, name: "", quantity: 1, category: ""});

  let noCategorySel = false;

  const increment = (e) => {
    e.preventDefault();
    if (item.quantity < 20) {
      setItem({...item, quantity: item.quantity + 1});
    }
  };

  const decrement = (e) => {
    e.preventDefault();
    if (item.quantity !== 1) {
      setItem({...item, quantity: item.quantity - 1});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({...item, quantity: item.quantity})
  };

  const handleNameChange = (e) => {
    setItem({...item, name: e.target.value});
  };

  const handleCategoryChange = (e) => {
    if (item.category === ""){
      noCategorySel = true;
    }
    else {
      setItem({...item, category: e.target.value});
    }
  };

  return (
    <form 
    onSubmit={handleSubmit}
    className="flex flex-col items-center gap-4">
      {/* Item Name */}
      <input
        type="text"
        value={item.name}
        onChange={(e) => handleNameChange(e)}
        className="w-60 h-9 p-2 font-semibold text-lg bg-slate-900 border-slate-900 border-2 rounded-lg"
        placeholder="Item name"
        required
      ></input>

      {/* Item Quantity and Type */}
      <div>
        {/* Quantity Button */}
        <div className="flex flex-row justify-center items-center w-60 h-12">
          <p className="flex-grow p-2 m-4 font-bold text-lg">{item.quantity}</p>
          <div className="flex flex-row">
            <button
              onClick={(e) => decrement(e)}
              className={`p-1 m-2 w-16 font-bold text-xl rounded-3xl 
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
              className={`p-1 m-2 w-16 font-bold text-xl rounded-3xl 
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

        {/* Type Selection */}
        <select
          value={item.category}
          onChange={(e) => handleCategoryChange(e)}
          className="w-60 h-12 m-2 p-2 font-semibold text-lg bg-slate-900 border-slate-900 border-2 rounded-lg"
        >
          <option value="" disabled >Category</option>
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

      {/* Submit Button */}
      <button 
      type="submit"
      className="p-1 w-60 h-10 font-semibold text-xl rounded-3xl
       text-black bg-indigo-300 hover:bg-indigo-600 active:bg-indigo-400">
        Add Item
      </button>
      {noCategorySel === true && <p>Please Select a Category</p>}
    </form>
  );
}
