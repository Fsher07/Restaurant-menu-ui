import { getMeals } from './api.js';
import { addNewLike, getLikes } from './api2.js';

const listItems = document.querySelector('.list-items');

const populateMeals = async () => {
  const allMeals = await getMeals();
  const allLikes = await getLikes();
  console.log(allLikes[0])
  allMeals.categories.forEach((meal) => {
    let mealLikes;
    allLikes.forEach((like) => {
      if (like.item_id === meal.idCategory) {
        mealLikes = like.likes
      }
    })
    const listItem = document.createElement('div');
    listItem.id = meal.idCategory;
    listItem.className = 'list-item';
    listItem.innerHTML = `<img src=${meal.strCategoryThumb} alt="Meal-image" class="meal-image">
        <div class="meal-title">
          <h2>${meal.strCategory}</h2>
          <i class="fas fa-heart like-icon"></i>
        </div>
        <span class="meal-likes">${mealLikes} likes</span>
        <button class="comments">Comments</button>
        <button class="reservations">Reservations</button>
    `;
    listItems.appendChild(listItem);
    addNewLike(meal.idCategory);
  });
};

export default populateMeals;