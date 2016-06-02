import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postID } = this.props.params;
    //Obtener el indice del post
    const i = this.props.posts.findIndex(
      (post) => post.code === postID
    );
    //Obtener el post en cuestion
    const post = this.props.posts[i];
    const postComments = this.props.comments[postID] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  }
});

export default Single;
