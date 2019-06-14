import React from 'react';
import './post.css';

const PostHeader = props => {
  return (
    <div className="header">
      <div className="thumbnailcontainer">
        <img
          src={props.thumbnailUrl}
          className="thumbnail"
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;