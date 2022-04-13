import { getMeals } from './api.js';

const listItems = document.querySelector('.list-items');

const populateMeals = async () => {
  const allMeals = await getMeals();
  allMeals.categories.forEach((meal) => {
    const listItem = document.createElement('div');
    const commentBtn = document.createElement('button');
    commentBtn.className = 'comment-btn';
    commentBtn.innerText = 'Comments';
    listItem.id = meal.idCategory;
    listItem.className = 'list-item';
    listItem.innerHTML = `<img src=${meal.strCategoryThumb} alt="Meal-image" class="meal-image">
        <div class="meal-title">
          <h2>${meal.strCategory}</h2>
          <i class="fas fa-heart like-icon"></i>
        </div>
        <span></span>
        <button class="reservations">Reservations</button>
    `;
    listItems.appendChild(listItem);
    listItem.appendChild(commentBtn);
    commentBtn.addEventListener('click', () => {
      const commentWindow = document.querySelector('.comment-window');
      const closeBtn = document.createElement('i');
      closeBtn.className = 'fa-solid fa-x';
      commentWindow.innerHTML = `
      <img src=${meal.strCategoryThumb} alt="Meal-image" class="comment-meal-image">
      <div class="comment-meal-info">
        <h2 class='window-title'>${meal.strCategory}</h2>
        <p class='window-description'>${meal.strCategoryDescription}</p>
      </div>`;
      commentWindow.classList.toggle('show-comment-window');
      commentWindow.appendChild(closeBtn);
      closeBtn.addEventListener('click', () => {
        commentWindow.classList.toggle('show-comment-window');
      });
    });
  });
};

export default populateMeals;