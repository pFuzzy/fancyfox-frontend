import React from 'react';
import { AddButton, Header, Logo } from '../styled-components/Header';
import FancyFox from '../images/FancyFox.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Content, Post, Video } from '../styled-components/Content';

const MainPage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8762/media/all')
      .then((res) => setVideos(res.data));
  }, []);
  return (
    <div>
      <Header>
        <Logo src={FancyFox} alt='FancyFoxLogo' />
        <AddButton to='/add'>Add post</AddButton>
      </Header>
      <Content>
        {videos.map((video) => {
          return (
            <Post>
              <div>{video.title}</div>
              <Video url={video.url} />
            </Post>
          );
        })}
      </Content>
    </div>
  );
};

export default MainPage;
