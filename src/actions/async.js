import { API_BASE_URL } from '../config';

// Get actions
export const FETCH_WORD_REQUEST = 'FETCH_WORD_REQUEST'
export const fetchWordRequest = () => ({
  type: FETCH_WORD_REQUEST,
});

export const FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS'
export const fetchWordSuccess = word => ({
  type: FETCH_WORD_SUCCESS,
  word
});

export const FETCH_WORD_ERROR = 'FETCH_WORD_ERROR'
export const fetchWordError = error => ({
  type: FETCH_WORD_ERROR,
  error
});

// async action: dispatches async request, handles success or err actions
export const fetchWord = (userId) => dispatch => {
  dispatch(fetchWordRequest())
  return fetch(`${API_BASE_URL}/words/${userId}`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText)
      }
      return res.json()
    })
    .then(routes => dispatch(fetchWordSuccess(routes)))
    .catch(err => dispatch(fetchWordError(err)))
}

export const updateWord = (userId, userAnswer) => {
  return fetch(`${API_BASE_URL}/words/${userId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userAnswer)
  })
  .then(res => {
    if (!res.ok) {
      return Promise.reject(res.statusText)
    }
    return res.json()
  })
  // .then(success => dispatch(updateWordSucess(success)))
  .catch(err => console.log(err));
}