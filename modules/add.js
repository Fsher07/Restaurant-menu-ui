import { getMeals } from "./api"

const listItems = document.querySelector('.list-items');

const populateMeals = async () => {
  let allMeals = await getMeals();
  allMeals.categories.forEach((meal) => {
    const listItem = document.createElement('div');
    listItem.id = meal.idCategory;
    listItem.innerHTML = 
        `<img src=${meal.strCategoryThumb} alt="Meal-image">
        <div>
          <h2>${meal.strCategory}</h2>
          <i class="fas fa-heart like-icon"></i>
        </div>
        <span></span>
        <button class="comments">Comments</button>
        <button class="reservations">Reservations</button>
    `
    listItems.appendChild(listItem);
  })
}

export default populateMeals; 