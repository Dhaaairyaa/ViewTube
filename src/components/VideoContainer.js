import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from "./VideoCard";
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      setVideos(json.items);
      setLoading(false);
    } catch (error) {
      setError('Error fetching videos. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-wrap'>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {videos.length > 0 && videos.map((video,index)=> (<Link to = {"/watch?v="+video.id}><VideoCard info={video} key={index}/></Link> ))}
    </div>
  );
};

export default VideoContainer;
