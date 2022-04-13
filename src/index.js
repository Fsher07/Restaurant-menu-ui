import './style.css';
import populateMeals, { popupComments, closeCommentWindow } from '../modules/add.js';

document.addEventListener('DOMContentLoaded', () => {
  populateMeals();
});

document.addEventListener('click', (e) => {
  if (e.target.className === 'comments') {
    popupComments(e.target.parentElement.id);
  }
  if (e.target.className === 'fa-solid fa-x') {
    closeCommentWindow();
  }
});

