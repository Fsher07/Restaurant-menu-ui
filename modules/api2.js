const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
// 5qYB5XqSvfCHbkA99j4e NtHb3d5dTrNZkt8GXbKc
let appId = 'NtHb3d5dTrNZkt8GXbKc';
export const addNewApp = async () => {
  if (appId === '') {
    const result = await fetch(`${baseURL}/apps/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    appId = await result.text();
  }
};

export const addNewLike = async (itemId) => {
  const data = { item_id: itemId };
  const result = await fetch(`${baseURL}/apps/${appId}/likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return result;
};

export const getLikes = async () => {
  const result = await fetch(`${baseURL}/apps/${appId}/likes/`);
  const result2 = await result.text();
  if (result2 === '') {
    const likes = [];
    return likes;
  }
  const likes = result2;
  return likes;
};

export const addNewComment = async (itemID, inputName, inputComment) => {
  const input = { item_id: itemID, username: inputName, comment: inputComment };
  const result = await fetch(`${baseURL}/apps/${appId}/comments/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  });
  return result.status;
};

export const updateLike = async (itemId, likes) => {
  const data = {
    item_id: itemId,
    likes,
  };
  const result = await fetch(`${baseURL}/apps/${appId}/likes/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return result;
};

export const getComments = async (id) => {
  const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NtHb3d5dTrNZkt8GXbKc/comments?item_id=${id}`);
  const comments = await result.json();
  return comments;
};