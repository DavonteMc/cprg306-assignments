"use client";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemData from "./items.json";
import Meals from "./meals";
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
  if (id === "") {
    return null;
  }
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  const ingredientsList = [];
  for (let i = 1; i <= 20; i++) {
    if (
      data.meals[0][`strMeasure${i}`] === "" ||
      data.meals[0][`strMeasure${i}`] === null
    ) {
      break;
    }
    if (
      data.meals[0][`strIngredient${i}`] === "" ||
      data.meals[0][`strIngredient${i}`] === null
    ) {
      break;
    }
    ingredientsList.push(
      data.meals[0][`strMeasure${i}`] +
        "  –  " +
        data.meals[0][`strIngredient${i}`]
    );
  }
  return ingredientsList;
}

export default function Page() {
  const [items, setItems] = useState(itemData);
  const [meals, setMeals] = useState([]);
  const [keyIngredient, setKeyIngredient] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [ingredients, setIngredients] = useState([]);

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

  const handleMealSelection = (id) => {
    setSelectedMeal(id);
  };

  const loadMeals = async (keyIngredient) => {
    const loadedMeals = await fetchMeals(keyIngredient);
    if (loadedMeals === null) {
      setMeals([]);
    }
    setMeals(loadedMeals);
  };

  const loadIngredients = async (selectedMeal) => {
    const ingredientsList = await fetchIngredients(selectedMeal);
    if (ingredients === null) {
      setIngredients([]);
    }
    setIngredients(ingredientsList);
  };

  useEffect(() => {
    loadMeals(keyIngredient);
    loadIngredients(selectedMeal);
  }, [keyIngredient, selectedMeal]);

  return (
    <main className="p-4 items-center text-white bg-indigo-950">
      <h1 className="text-3xl font-bold p-2">Shopping List</h1>
      <div className="flex gap-4">
        <div className=" w-2/5 bg-gray-800 p-4 rounded-lg">
          <NewItem onAddItem={handleAddItem} />
          <ItemList
            onIngrdntSelection={handleIngrdntSelection}
            itemList={items}
          />
        </div>
        <Meals
          mealList={meals}
          mainIngredient={keyIngredient}
          ingredientList={ingredients}
          selectedMeal={selectedMeal}
          onMealSelection={handleMealSelection}
        />
      </div>
    </main>
  );
}
