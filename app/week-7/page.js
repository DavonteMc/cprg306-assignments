"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import { useState, useEffect } from "react";

async function fetchMeals(ingredient) {
  if (ingredient === "") {
    return null;
  }
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
}

async function fetchIngredients(id) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  return data.meals[0];
}

export default function Page() {
  const [items, setItems] = useState(itemData);
  const [meals, setMeals] = useState([]);
  const [keyIngredient, setKeyIngredient] = useState("");
  const [ingredients, setIngredients] = useState({});

  const generateID = () => {
    let ids = items.map((item) => item.id);
    let newId = Math.max(...ids) + 1;
    return newId;
  };

  const handleAddItem = (item) => {
    setItems([...items, { ...item, id: generateID() }]);
  };

  const handleIngrdntSelection = async (e) => {
    setKeyIngredient(e);
  };

  const loadMeals = async (keyIngredient) => {
    const loadedMeals = await fetchMeals(keyIngredient);
    if (loadedMeals === null) {
      setMeals([]);
    }
    setMeals(loadedMeals);
  };

  useEffect(() => {
    loadMeals(keyIngredient);
  }, [keyIngredient]);

  return (
    <main className="p-4 items-center text-white bg-indigo-950 ">
      <h1 className="text-3xl font-bold p-2">Shopping List</h1>
      <div className="flex  gap-4">
        <div className="w-2/5 bg-gray-800 p-4 rounded-lg">
          <NewItem onAddItem={handleAddItem} />
          <ItemList
            onIngrdntSelection={handleIngrdntSelection}
            itemList={items}
          />
        </div>
        <div className="w-2/5 bg-gray-800 p-4 rounded-lg">
          <div className="items-center justify-center flex-col">
            <h2 className="ml-30 text-xl font-bold mb-2">Meal Ideas</h2>
            {meals === null ? (
              <p>Select an item to see meal ideas</p>
            ) : (
              <div>
                <div className="flex flex-row">
                  <p>Here are some meal ideas for: </p>
                  <p className="ml-2 font-bold">{keyIngredient}</p>
                </div>
                <ul>
                  {meals.map((meal) => (
                    <div key={meal.idMeal}>
                      <li onClick={() => loadIngredients(meal.idMeal)}>
                        {meal.strMeal}
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
