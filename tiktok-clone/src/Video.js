import React from "react";
import ReactPlayer from "react-player";
import "./Video.css";

import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, shares, messages }) {
  return (
    <div className="video">
      {/* <video
        id="video"
        preload="none"
        onClick={handleVideoPress}
        loop
        className="video__player"
        ref={videoRef}
      >
        <source src="./static/video.mp4" type="video/mp4" />
      </video> */}
      <ReactPlayer
        width="100%"
        height="100%"
        className="video__player"
        url={url}
      />
      {/* Video footer */}
      <VideoFooter
        channel={channel}
        description={description}
        song={song}
      />
      {/* Video Sidebar */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
