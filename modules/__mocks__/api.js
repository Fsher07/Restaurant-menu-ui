const categories = [
  { idCategory: '1' },
  { idCategory: '2' },
  { idCategory: '3' },
  { idCategory: '4' },
  { idCategory: '5' },
];

export const getMeals = () => {
  const data = { categories };
  const result = data;
  return result;
};

export const getMealById = async (mealId) => {
  const result = categories.filter((category) => category.idCategory === mealId);
  return result;
};
