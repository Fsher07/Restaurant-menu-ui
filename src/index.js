import './style.css';
import {
  populateMeals,
  addNewLikeToAPI,
  popupComments,
  closeCommentWindow,
  addComment,
  displayComments,
  updateCommentCounter,
  displayItemsTotal,
  clearInputValues,
} from '../modules/add.js';
import { addNewApp } from '../modules/api2.js';

document.addEventListener('DOMContentLoaded', () => {
  populateMeals();
  addNewApp();
  displayItemsTotal();
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('like-icon')) {
    const likes = e.target.parentNode.nextElementSibling.textContent.split(' ')[0];
    const mealId = e.target.parentNode.parentNode.id;
    addNewLikeToAPI(mealId, likes);
  } else if (e.target.className === 'comments') {
    popupComments(e.target.parentElement.id);
    displayComments(e.target.parentElement.id);
    document.getElementsByTagName('main')[0].style.filter = 'blur(4px)';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  } else if (e.target.className === 'fa-solid fa-x') {
    closeCommentWindow();
    document.getElementsByTagName('main')[0].style.filter = 'none';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }
});

document.addEventListener('click', (e) => {
  if (e.target.className === 'comment-btn') {
    addComment(e.target.parentElement.parentElement.id);
    updateCommentCounter(e.target.parentElement.parentElement.id);
    clearInputValues();
  }
});