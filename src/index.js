import './style.css';
import populateMeals,
{
  popupComments, closeCommentWindow, addComment, displayComments, updateCommentCounter,
} from '../modules/add.js';

document.addEventListener('DOMContentLoaded', () => {
  populateMeals();
});

document.addEventListener('click', (e) => {
  if (e.target.className === 'comments') {
    popupComments(e.target.parentElement.id);
    displayComments(e.target.parentElement.id);
    document.getElementsByTagName('main')[0].style.filter = 'blur(4px)';
    document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  }
  if (e.target.className === 'fa-solid fa-x') {
    closeCommentWindow();
    document.getElementsByTagName('main')[0].style.filter = 'none';
    document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }
});

document.addEventListener('click', (e) => {
  if (e.target.className === 'comment-btn') {
    addComment(e.target.parentElement.parentElement.id);
    updateCommentCounter(e.target.parentElement.parentElement.id);
  }
});