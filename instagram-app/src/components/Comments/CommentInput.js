import React from 'react';
import './comment.css';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type='text'
        value={props.comment}
        className="commentinput"
        placeholder="Add Your Comment.."
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;