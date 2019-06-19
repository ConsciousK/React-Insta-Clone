import React from 'react';
import Post from './Post';
import './post.css';

const PostsContainer = props => {
  return (
    <div className="postcontainer">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostsContainer;