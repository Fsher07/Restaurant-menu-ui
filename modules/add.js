import { getMeals } from './api.js';
import {
  addNewLike, getLikes, addNewComment, getComments,
} from './api2.js';

const listItems = document.querySelector('.list-items');

const populateMeals = async () => {
  const allMeals = await getMeals();
  const allLikes = await getLikes();
  allMeals.categories.forEach((meal) => {
    let mealLikes;
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

export const popupComments = async (meal) => {
  const allMeals = await getMeals();
  const commentMeal = allMeals.categories[meal - 1];
  const commentWindow = document.querySelector('.comment-window');
  commentWindow.id = meal;
  commentWindow.innerHTML = `
    <i class="fa-solid fa-x"></i>
    <div class="comment-meal-info">
      <img src=${commentMeal.strCategoryThumb} alt="Meal-image" class="comment-meal-image">
      <h2 class='window-title'>${commentMeal.strCategory}</h2>
      <p class='window-description'>${commentMeal.strCategoryDescription}</p>
    </div>
    <section class="main-comment">
    <span class="comment-counter"></span>
    <ul class="comment-list"></ul>
    </section>
    <h3 class="comment-title">Add a comment</h3>
    <div class="comment-form">
      <input type="text" class="name-input" placeholder="Your name" required/>
      <textarea class="comment-input" placeholder="Your insgihts..." required/></textarea>
      <button class="comment-btn">Comment</button>
    </div>`;
  commentWindow.classList.toggle('show-comment-window');
};

export const addComment = async (itemID) => {
  if (document.querySelector('.name-input').value !== '' && document.querySelector('.comment-input').value !== '') {
    const reponse = await addNewComment(itemID, document.querySelector('.name-input').value, document.querySelector('.comment-input').value);
    if (reponse === 201) {
      await getComments(itemID);
      updateLastComment(itemID);
    }
  }
};

export const updateLastComment = async (itemID) => {
  const allComments = await getComments(itemID);
  const lastComment = allComments[allComments.length - 1];
  const commentList = document.querySelector('.comment-list');
  const commentItem = document.createElement('li');
  commentItem.className = 'comment-item';
  commentItem.innerHTML = `
    <li class="comment-info">
      <p class="comment-text">${lastComment.creation_date} ${lastComment.username}:  ${lastComment.comment}</p>
    </li>
  `;
  commentList.appendChild(commentItem);
  updateCommentCounter(itemID);
};

export const displayComments = async (itemID) => {
  const allComments = await getComments(itemID);
  const commentList = document.querySelector('.comment-list');
  allComments.forEach((comment) => {
    const commentItem = document.createElement('li');
    commentItem.className = 'comment-item';
    commentItem.innerHTML = `
      <li class="comment-info">
        <p class="comment-text">${comment.creation_date} ${comment.username}:  ${comment.comment}</p>
      </li>
    `;
    commentList.appendChild(commentItem);
  });
  updateCommentCounter(itemID);
};

export const updateCommentCounter = async (itemID) => {
  const allComments = await getComments(itemID);
  const counter = document.querySelector('.comment-counter');
  counter.innerHTML = `<i class="fa-solid fa-comment"></i>${allComments.length ? allComments.length : 0} comments`;
};

export const closeCommentWindow = () => {
  const commentWindow = document.querySelector('.comment-window');
  commentWindow.classList.toggle('show-comment-window');
};

export default populateMeals;