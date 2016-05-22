//Increment 
const increment = (index) => {
    return {
        type: 'INCREMENT_LIKES',
        index
    };
};

//Add comment
const addComment = (postID, author, comment) => {
    return {
        type: 'ADD_COMMENT',
        postID,
        author,
        comment
    };
};

//Remove comment
const removeComment = (postID, index) => {
    return {
        type: 'REMOVE_COMMENT',
        index,
        postID
    };
};

export default increment;
export default addComment;
export default removeComment;