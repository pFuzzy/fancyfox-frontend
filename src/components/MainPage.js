import React from 'react';
import { AddButton, Header, Logo } from '../styled-components/HeaderStyle';
import FancyFox from '../images/FancyFox.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Content, Post, Video, Title } from '../styled-components/ContentStyle';


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
              <Title>{video.title}</Title>
              <Video url={video.url} />
            </Post>
          );
        })}
      </Content>
    </div>
  );
};

export default MainPage;
