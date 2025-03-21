

export default function Meals({
  mealList,
  mainIngredient,
  ingredientList,
  selectedMeal,
  onMealSelection,
}) {
  return (
    <div className=" bg-gray-800 p-4 rounded-lg">
      <div className="items-center justify-center flex-col">
        <h2 className="ml-30 text-xl font-bold mb-2">Meal Ideas</h2>
        {mealList === null ? (
          <p>Select an item to see meal ideas</p>
        ) : (
          <div>
            <div className="flex flex-row mb-2">
              <p>Here are some meal ideas for: </p>
              <p className="ml-2 font-bold">{mainIngredient}</p>
            </div>
            <ul>
              {mealList.map((meal) => (
                <div key={meal.idMeal}>
                  <button
                    className="text-xl flex-col place-items-start font-bold bg-slate-900 w-full mb-3 p-3 rounded-xl hover:bg-indigo-600"
                    onClick={() => onMealSelection(meal.idMeal)}
                  >
                    <li>{meal.strMeal}</li>
                  </button>
                  {ingredientList !== null && selectedMeal === meal.idMeal && (
                    <ul className="ml-2 mb-4 text-lg">
                      {ingredientList.map((ingredient, index) => (
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
  );
}
