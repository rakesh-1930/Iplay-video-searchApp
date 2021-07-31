import React from "react";

import "./VideoList.styles.scss";
import DisplayCard from "../DisplayCard/DisplayCard";

const VideoList = ({ videos, onVideoSelect }) => {
  const display = videos.map((video) => {
    return <DisplayCard onVideoSelect={onVideoSelect} {...video} />;
  });
  return <div className="video-container">{display}</div>;
};
export default VideoList;
