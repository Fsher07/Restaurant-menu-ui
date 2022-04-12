import './style.css';
import populateMeals from '../modules/add.js';
import { getLikes } from '../modules/api2.js';

document.addEventListener('DOMContentLoaded', () => {
  populateMeals();
  getLikes();
});