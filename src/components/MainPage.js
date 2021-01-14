import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Content, Post, Video, TitleLink } from '../styled-components/ContentStyle';


const MainPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8762/media/all')
      .then((res) => setVideos(res.data));
  }, []);
  
  return (
    <div>
      <Content>
        {videos.map((video) => {
          return (
            <Post key={video.id}>
              <TitleLink to={'/details/' + video.id} >{video.title}</TitleLink>
              <Video url={video.url} />
            </Post>
          );
        })}
      </Content>
    </div>
  );
};

export default MainPage;
