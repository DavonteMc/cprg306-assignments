"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState("");

  const increment = (e) => {
    e.preventDefault();
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = (e) => {
    e.preventDefault();
    if (quantity !== 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let item = { name, quantity, type };
    console.log(item);

    setName("");
    setQuantity(0);
    setType("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Item Name */}
      <input
        type="text"
        value={name}
        onChange={(e) => handleNameChange(e)}
        placeholder="Item name"
        required
      ></input>

      {/* Item Quantity and Type */}
      <div>
        {/* Quantity Button */}
        <div className="flex flex-row justify-center items-center w-60 h-16 bg-slate-200 rounded-2xl">
          <p className="flex-grow p-2 m-4 font-bold text-lg">{quantity}</p>
          <div className="flex flex-row">
            <button
              onClick={(e) => decrement(e)}
              className={`p-1 m-2 w-16 font-bold text-xl rounded-3xl 
                                    ${
                                      quantity === 1
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
                                      quantity === 20
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
          value={type}
          onChange={(e) => handleTypeChange(e)}
          className="w-16"
        >
          <option disabled>Category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Meat">Meat</option>
          <option value="Frozen Foods">Frozen Foods</option>
          <option value="Canned Goods">Canned Goods</option>
          <option value="Dry Goods">Dry Goods</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Household">Household</option>
          <option value="Other">Other</option>"
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit">Add Item</button>
    </form>
  );
}
