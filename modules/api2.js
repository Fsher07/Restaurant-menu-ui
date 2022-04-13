const baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

let appId = 'NtHb3d5dTrNZkt8GXbKc';
export const addNewApp = async () => {
  const result = await fetch(`${baseURL}/apps/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (appId !== '') {
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
  const likes = await result.json();
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

export const getComments = async (id) => {
  const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NtHb3d5dTrNZkt8GXbKc/comments?item_id=${id}`);
  const comments = await result.json();
  return comments;
};