const baseURL = 'https://themealdb.com/api/json/v1/1/';

export const getMeals = async () => {
  const result = await fetch(`${baseURL}/categories.php`);
  const allMeals = result.json();
  return allMeals;
};

export const getMealById = async (mealId) => {
  const result = await fetch(`${baseURL}/lookup.php?i=${mealId}`);
  const singleMeal = result.json();
  return singleMeal;
};