const authenticate = (state='', action) => {
  switch(action.type) {
    case 'AUTHENTICATE':
      state = action.payload;
      return state
    default:
      return state;
  }
}

export default authenticate;