import { updateCommentCounter } from '../add.js';

jest.mock('../api2.js');

describe('checking the correct total number of comments', () => {
  document.body.innerHTML = `
    <span class="comment-counter"></span>
    <ul class="comment-section">
    </ul>`;

  test('should display the correct number of comments', async () => {
    await updateCommentCounter();
    expect(document.querySelector('.comment-counter').innerHTML).toEqual('<i class="fa-solid fa-comment"></i>5 comments');
  });
});