import React from "react";
import moment from "moment";

import "./DisplayCard.styles.scss";

const DisplayCard = (video) => {
  const onCardClick = () => {
    video.onVideoSelect(video);
  };
  const time = moment(video.snippet.publishedAt)._d;
  // const videoDate = time._d
  console.log(moment().from(time, true));

  return (
    <a className="card-anchor" href="#player">
      <div className="card-main-container">
        <div
          key={video.id.videoId}
          className="card-container"
          onClick={onCardClick}
        >
          <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
          <div className="card-detail">
            <h4 className="card-title">{video.snippet.title}</h4>
            <p className="card-description">{video.snippet.description} </p>
            <h4 className="card-description">
              Channel : {video.snippet.channelTitle}
            </h4>

            <p className="card-description">
              Uploaded: {moment().from(time, true)} ago
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default DisplayCard;
