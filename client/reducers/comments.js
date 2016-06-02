const postComments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),

        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

const comments = (state = [], action) => {
  if(typeof action.postID !== 'undefined') {
    return {
      ...state,
      [action.postID]: postComments(state[action.postID], action)
    }
  }

  return state;
};

export default comments;
