import React from 'react';
import heart from '../../assets/heart.png';
import './post.css';

const LikeSection = props => {
    return [
      <div
        className="like-section"
        key="likes-icons-container"
        onClick={props.incrementLike}
      >
        <img className="likeheart" src={heart} />

      </div>,
      <div className="like-section" key="likes-container">
        <div className="like-section-wrapper">{props.likes}</div>
      </div>
    ];
  };

export default LikeSection;