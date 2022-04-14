// jest test

describe('checking the correct total number of comments', () => {
  document.body.innerHTML = `
    <span class="comment-counter"></span>
    <ul class="comment-section">
    </ul>`;
  const commentapi1 = [{ user1: 'comment1' }];
  const commentapi2 = [{ user2: 'comment2' }, { user3: 'comment3' }];
  const commentapi3 = [];
  const displayComment = (input) => {
    const commentSection = document.querySelector('.comment-section');
    const commentCounter = document.querySelector('.comment-counter');
    commentCounter.innerHTML = `<i class="fa-solid fa-comment"></i>${input.length ? input.length : 0} comments`;
    input.forEach((comment) => {
      const commentItem = document.createElement('li');
      commentItem.className = 'comment-item';
      commentItem.innerHTML = `
        <div class="comment-info">
          <p class="comment-text">${Object.keys(comment)[0]}:  ${Object.values(comment)[0]}</p>
        </div>
      `;
      commentSection.appendChild(commentItem);
    });
  };
  test('should display the correct number of comments', () => {
    displayComment(commentapi1);
    expect(document.querySelector('.comment-counter').innerHTML).toBe('<i class="fa-solid fa-comment"></i>1 comments');
    displayComment(commentapi2);
    expect(document.querySelector('.comment-counter').innerHTML).toBe('<i class="fa-solid fa-comment"></i>2 comments');
    displayComment(commentapi3);
    expect(document.querySelector('.comment-counter').innerHTML).toBe('<i class="fa-solid fa-comment"></i>0 comments');
  });
});