const initialState = {
  list: ['Item A', 'Item B'],
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

    default:
      return state;
  }
};

export default reducers;
