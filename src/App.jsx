import React from "react";

import youtube from "./components/Api/youtube";
import DisplayPlayer from "./components/displayPlayer/DisplayPlayer";
import SearchBar from "./components/searchBar/SearchBar";
import VideoList from "./components/VideoList/VideoList";
import "./main.styles.scss";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  onSearch = async (text) => {
    const response = await youtube.get("/search", {
      params: {
        q: text,
      },
    });
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: response.data.items[0] });
  };

  render() {
    return (
      <div className="App">
        <h1 className="logo">IpLay</h1>
        <SearchBar onSearch={this.onSearch} />
        <DisplayPlayer selectedVideo={this.state.selectedVideo} />

        <VideoList
          onVideoSelect={this.onVideoSelect}
          className="video-list-container"
          videos={this.state.videos}
        />
      </div>
    );
  }
}
export default App;
