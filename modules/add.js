import { getMeals } from './api.js';
import { addNewLike, getLikes, updateLike } from './api2.js';

const listItems = document.querySelector('.list-items');

export const populateMeals = async () => {
  const allMeals = await getMeals();
  let allLikes = await getLikes();
  allLikes = JSON.parse(allLikes);
  allMeals.categories.forEach((meal) => {
    let mealLikes = 0;
    if (allLikes.length === 0) {
      addNewLike(meal.idCategory);
    }
    allLikes.forEach((like) => {
      if (like.item_id === meal.idCategory) {
        mealLikes = like.likes;
      }
    });
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
  });
};

export const addNewLikeToAPI = (mealId, likes) => {
  const likeSpans = document.querySelectorAll('.meal-likes');
  likeSpans.forEach((likeSpan) => {
    if (likeSpan.parentNode.id === mealId) {
      let newlikes = parseInt(likes, 10) + 1;
      newlikes = newlikes.toString();
      likeSpan.textContent = `${newlikes} likes`;
      updateLike(mealId, newlikes);
    }
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
