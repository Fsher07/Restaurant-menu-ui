import './style.css';
import {
  populateMeals,
  addNewLikeToAPI,
  popupComments,
  closeCommentWindow,
  getItemsTotal,
} from '../modules/add.js';
import { addNewApp } from '../modules/api2.js';

document.addEventListener('DOMContentLoaded', () => {
  populateMeals();
  addNewApp();
  getItemsTotal();
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('like-icon')) {
    const likes = e.target.parentNode.nextElementSibling.textContent.split(' ')[0];
    const mealId = e.target.parentNode.parentNode.id;
    addNewLikeToAPI(mealId, likes);
  } else if (e.target.className === 'comments') {
    popupComments(e.target.parentElement.id);
  } else if (e.target.className === 'fa-solid fa-x') {
    closeCommentWindow();
  }
});
