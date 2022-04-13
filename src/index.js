import './style.css';
import { populateMeals, addNewLikeToAPI } from '../modules/add.js';
import { addNewApp } from '../modules/api2';

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