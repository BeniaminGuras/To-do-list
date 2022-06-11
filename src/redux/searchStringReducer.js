const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'CHANGE_FILTER':
      return action.payload
    default:
      return statePart;
  }
}

export default searchStringReducer;