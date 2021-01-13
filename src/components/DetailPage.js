import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Title,
  CommentContainer,
  Comment
} from "../styled-components/DetailPageStyle";
import {Content, Post, Video, Rating} from "../styled-components/ContentStyle";

const DetailPage = () => {
  const [video, setVideo] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:8762/media/" + id)
    .then((res) => {
      setVideo(res.data);
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <></>;
  } else {
    return (
      <Content>
        <Post>
          <Title>{video.title}</Title>
          <Video url={video.url} />
          <Rating>{video.rating}</Rating>
        </Post>
        <CommentContainer>
            {video.comments.map((comment) => {
              return <Comment key={comment.id}>{comment}</Comment>;
            })}
        </CommentContainer>
      </Content>
    );
  }
};

export default DetailPage;
