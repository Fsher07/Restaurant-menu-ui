import { getMeals } from './api.js';

const listItems = document.querySelector('.list-items');

const populateMeals = async () => {
  const allMeals = await getMeals();
  allMeals.categories.forEach((meal) => {
    const listItem = document.createElement('div');
    listItem.id = meal.idCategory;
    listItem.className = 'list-item';
    listItem.innerHTML = `<img src=${meal.strCategoryThumb} alt="Meal-image" class="meal-image">
        <div class="meal-title">
          <h2>${meal.strCategory}</h2>
          <i class="fas fa-heart like-icon"></i>
        </div>
        <span></span>
        <button class="comments">Comments</button>
        <button class="reservations">Reservations</button>
    `;
    listItems.appendChild(listItem);
  });
};

export const popupComments = async (meal) => {
  const allMeals = await getMeals();
  const commentMeal = allMeals.categories[meal - 1];
  const commentWindow = document.querySelector('.comment-window');
  const closeBtn = document.createElement('i');
  closeBtn.className = 'fa-solid fa-x';
  commentWindow.innerHTML = `
    <div class="comment-meal-info">
      <img src=${commentMeal.strCategoryThumb} alt="Meal-image" class="comment-meal-image">
      <h2 class='window-title'>${commentMeal.strCategory}</h2>
      <p class='window-description'>${commentMeal.strCategoryDescription}</p>
    </div>`;
  commentWindow.classList.toggle('show-comment-window');
  commentWindow.appendChild(closeBtn);
};

export const closeCommentWindow = () => {
  const commentWindow = document.querySelector('.comment-window');
  commentWindow.classList.toggle('show-comment-window');
};

export default populateMeals;