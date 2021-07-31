import React from "react";
import "./DisplayPlayer.styles.scss";

const DisplayPlayer = ({ selectedVideo }) => {
  if (selectedVideo) {
    const displayVideo = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    return (
      <div key={selectedVideo.id.videoId} className="display-container">
        <div className="display-frame">
          <iframe
            width="640"
            height="360"
            title={selectedVideo.snippet.title}
            src={displayVideo}
          />
        </div>
        <div className="video-detail">
          <h3 className="display-title">{selectedVideo.snippet.title}</h3>
          <p className="video-detail-description">
            {selectedVideo.snippet.description}
          </p>
        </div>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};
export default DisplayPlayer;
