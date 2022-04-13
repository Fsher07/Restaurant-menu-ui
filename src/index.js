import './style.css';
import populateMeals, { popupComments, closeCommentWindow, addComment, displayComments } from '../modules/add.js';

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

document.addEventListener('click', (e) => {
  if (e.target.className === 'comment-btn') {
    addComment(e.target.parentElement.parentElement.id);
    displayComments(e.target.parentElement.parentElement.id);
  }
});