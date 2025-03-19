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
  if (id === "") {
    return null;
  }
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  const data = await response.json();
  const ingredientsList = [
    // data.meals[0]["strIngredient" + 1]
    // loop for the 20 items

    data.meals[0].strIngredient1 + "   " + data.meals[0].strMeasure1,
    data.meals[0].strIngredient2 + "   " + data.meals[0].strMeasure2,
    data.meals[0].strIngredient3 + "   " + data.meals[0].strMeasure3,
    data.meals[0].strIngredient4 + "   " + data.meals[0].strMeasure4,
    data.meals[0].strIngredient5 + "   " + data.meals[0].strMeasure5,
    data.meals[0].strIngredient6 +
      "   " +
      (data.meals[0].strMeasure6n === "" ? "" : data.meals[0].strMeasure6),
    data.meals[0].strIngredient7 + "   " + data.meals[0].strMeasure7,
    data.meals[0].strIngredient8 + "   " + data.meals[0].strMeasure8,
    data.meals[0].strIngredient9 + "   " + data.meals[0].strMeasure9,
    data.meals[0].strIngredient10 + "   " + data.meals[0].strMeasure10,
    data.meals[0].strIngredient11 + "   " + data.meals[0].strMeasure11,
    data.meals[0].strIngredient12 + "   " + data.meals[0].strMeasure12,
    data.meals[0].strIngredient13 + "   " + data.meals[0].strMeasure13,
    data.meals[0].strIngredient14 + "   " + data.meals[0].strMeasure14,
    data.meals[0].strIngredient15 + "   " + data.meals[0].strMeasure15,
    data.meals[0].strIngredient16 + "   " + data.meals[0].strMeasure16,
    data.meals[0].strIngredient17 + "   " + data.meals[0].strMeasure17,
    data.meals[0].strIngredient18 + "   " + data.meals[0].strMeasure18,
    data.meals[0].strIngredient19 + "   " + data.meals[0].strMeasure19,
    data.meals[0].strIngredient20 + "   " + data.meals[0].strMeasure20,
  ];
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
                      <button
                        className="text-xl flex-col place-items-start font-bold bg-slate-900 w-full mb-3 p-3 rounded-xl hover:bg-indigo-600"
                        onClick={() => handleMealSelection(meal.idMeal)}
                      >
                        <li>{meal.strMeal}</li>
                      </button>
                      {ingredients !== null && selectedMeal === meal.idMeal && (
                        <ul>
                          {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      )}
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
