import React from "react";
import moment from "moment";

import "./DisplayCard.styles.scss";

const DisplayCard = (video) => {
  const onCardClick = () => {
    video.onVideoSelect(video);
  };

  return (
    <div
      key={video.id.videoId}
      className="card-container"
      onClick={onCardClick}
    >
      <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
      <div className="card-detail">
        <h4 className="card-title">{video.snippet.title}</h4>
        <p className="card-description">{video.snippet.description} </p>
        <p className="card-description">
          {() => moment().from(video.snippet.publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default DisplayCard;
