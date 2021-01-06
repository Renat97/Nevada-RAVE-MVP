export const increment = (num) => {
  return {
    type: 'INCREMENT',
    payload: num
  }
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
};

export const signIn = () => {
  return {
    type: 'SIGN_IN'
  }
};

export const authenticate = (role) => {
  return {
    type: 'AUTHENTICATE',
    payload: role
  }
};