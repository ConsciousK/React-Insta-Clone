import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type='text'
        value={props.comment}
        placeholder="Add Your Comment.."
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentInput;