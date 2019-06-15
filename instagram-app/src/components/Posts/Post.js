import React from 'react';
import CommentContainer from '../Comments/CommentContainer';
import PostHeader from './PostHeader';

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          src={props.post.imageUrl}
          className="post-image"
        />
      </div>
      <CommentContainer comments={props.post.comments} />
    </div>
  );
};

export default Post;