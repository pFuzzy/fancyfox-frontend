import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Title,
  CommentContainer,
  Comment,
  CommentForm,
  CommentFormTextArea,
  CommentFormButton,
  CommentLabel
} from "../styled-components/DetailPageStyle";
import {Content, Post, Video, Rating, Upvote, Downvote} from "../styled-components/ContentStyle";

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


  function addComment(event) {
    event.preventDefault();
    let comment = event.target[0].value;
    console.log(comment);
  }


  if (isLoading) {
    return <></>;
  } else {
    return (
      <Content>
        <Post>
          <Title>{video.title}</Title>
          <Video url={video.url} />
          <Upvote/>
          <Downvote/>
          <Rating>{video.rating}</Rating>
        </Post>
        <CommentContainer>
          <CommentForm  onSubmit={addComment}>
            <CommentLabel>Add New Comment</CommentLabel>
            <CommentFormTextArea></CommentFormTextArea><br/>
            <CommentFormButton type="submit">submit</CommentFormButton>
          </CommentForm>
            {video.comments.map((comment) => {
              return <Comment key={comment.id}>{comment}</Comment>;
            })}
            <Comment> NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very Nice</Comment>
            <Comment>Very good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very NiceVery good Very Nice</Comment>
        </CommentContainer>
      </Content>
    );
  }
};

export default DetailPage;
