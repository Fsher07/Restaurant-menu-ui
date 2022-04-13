import './style.css';
import { populateMeals, addNewLikeToAPI } from '../modules/add.js';
import { addNewApp } from '../modules/api2';
import populateMeals, { popupComments, closeCommentWindow } from '../modules/add.js';


document.addEventListener('DOMContentLoaded', () => {
  populateMeals();
  addNewApp();
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('like-icon')) {
    let likes = e.target.parentNode.nextElementSibling.textContent.split(' ')[0];
    const mealId = e.target.parentNode.parentNode.id;
    addNewLikeToAPI(mealId, likes);
  }
});
  if (e.target.className === 'comments') {
    popupComments(e.target.parentElement.id);
  }
  if (e.target.className === 'fa-solid fa-x') {
    closeCommentWindow();
  }
});
