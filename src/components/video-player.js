import React from "react";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";

const VideoPlayer = props => {
  return (
    <Player playsInline poster={props.poster} src={props.src}>
      <BigPlayButton position="center" />
    </Player>
  );
};

export default VideoPlayer;
