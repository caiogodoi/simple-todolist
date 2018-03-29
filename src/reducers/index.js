const initialState = {
  list: ['Item A', 'Item B'],
  newItem: '',
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return Object.assign({}, state, {
        list: [...state.list, action.value],
      });
    case 'REMOVE_ITEM':
      const newList = [...state.list];
      const index = newList.indexOf(action.value);
      newList.splice(index, 1);
      return Object.assign({}, state, {
        list: newList,
      });
    case 'UPDATE_NEW_ITEM':
      return Object.assign({}, state, {
        newItem: action.value,
      });
    default:
      return state;
  }
};

export default reducers;
