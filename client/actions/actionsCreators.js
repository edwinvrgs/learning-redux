//Increment
export const increment = (index) => {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

//Add comment
export const addComment = (postID, author, comment) => {
    return {
        type: 'ADD_COMMENT',
        postID,
        author,
        comment
    }
}

//Remove comment
export const removeComment = (postID, index) => {
    return {
        type: 'REMOVE_COMMENT',
        index,
        postID
    }
}
