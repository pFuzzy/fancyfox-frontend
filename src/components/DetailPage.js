import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Content, Title, Video, CommentContainer, Comment } from '../styled-components/ContentStyle';

const DetailPage = () => {
  const [video, setVideo] = useState({});
  const {id} = useParams();

  useEffect(() => {
    axios
      .get('http://localhost:8762/media/' + id)
      .then((res) => setVideo(res.data));
  }, []);

  console.log(video);
  return (

    <Content>
      <Title>{video.title}</Title>
      <Video>{video.title}</Video>
      <CommentContainer>
        {video.comment}
      </CommentContainer>
    </Content>
  );
};

export default DetailPage;
