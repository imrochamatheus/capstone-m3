import React from "react";
import ReactPlayer from "react-player/youtube";

const TraillerPlayer = ({ id }) => {
  const baseURL = "https://www.youtube.com/watch?v=";
  return (
    <ReactPlayer
      controls
      url={baseURL + id}
      playing
      width="100%"
      style={{ maxWidth: "640px", margin: "0 auto" }}
    />
  );
};

export default TraillerPlayer;
