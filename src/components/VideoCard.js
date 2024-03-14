import React from "react";
import { useSelector } from "react-redux";
const VideoCard = ({ info }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className={`p-2 m-2 shadow-lg ${isMenuOpen ? "w-72" : "w-64 mx-3 "}`}>
      <img
        className="rounded-lg"
        src={thumbnails.medium.url}
        alt="thumbnail"
      ></img>
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
