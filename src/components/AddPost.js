import React, { useState } from 'react';
import {
  Title,
  Input,
  FlexBoxRow,
  FlexBoxColumn,
  Button,
} from '../styled-components/AddPostStyle';
import { Content, Post } from '../styled-components/ContentStyle';
import axios from 'axios';
import config from '../config.json';

const AddPost = () => {
  const [url, seturl] = useState('');
  const [title, setTitle] = useState('');

  return (
    <Content>
      <Post>
        <FlexBoxColumn>
          <FlexBoxRow>
            <Title>Video title:</Title>
            <Input type='text' onChange={(e) => setTitle(e.target.value)} />
          </FlexBoxRow>
          <FlexBoxRow>
            <Title>Video URL:</Title>
            <Input type='text' onChange={(e) => seturl(e.target.value)} />
          </FlexBoxRow>
          <Button onClick={() => sendVideo(title, url)}>Add</Button>
        </FlexBoxColumn>
      </Post>
    </Content>
  );
};

const sendVideo = (title, url) => {
  let body = {
    title: title,
    url: url,
  };

  axios
    .post(config.API + '/media/add-post', body)
    .then((res) => (window.location.href = '/'));
};

export default AddPost;
