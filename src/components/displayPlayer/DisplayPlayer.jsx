import React from "react";
import "./DisplayPlayer.styles.scss";
import ReactPlayer from "react-player";

const DisplayPlayer = ({ selectedVideo }) => {
  if (selectedVideo) {
    const displayVideo = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    return (
      <div
        key={selectedVideo.id.videoId}
        className="display-container"
        id="player"
      >
        <div className="display-frame">
          <ReactPlayer width="560" height="315" url={displayVideo} controls />
        </div>
        <div className="video-detail">
          <h3 className="display-title">{selectedVideo.snippet.title}</h3>
          <p className="video-detail-description">
            {selectedVideo.snippet.description}
          </p>
          <h4 className="video-detail-description">
            Channel : {selectedVideo.snippet.channelTitle}
          </h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <h1> Hello There</h1>
        <br />
        <br />
        <p> Search your videos</p>
      </div>
    );
  }
};
export default DisplayPlayer;
