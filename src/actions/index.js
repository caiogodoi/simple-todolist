export const addItemAction = item => ({
  type: 'ADD_ITEM',
  value: item,
});

export const removeItemAction = item => ({
  type: 'REMOVE_ITEM',
  value: item,
});

export const updateNewItemAction = newItem => ({
  type: 'UPDATE_NEW_ITEM',
  value: newItem,
});
