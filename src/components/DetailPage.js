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
import config from "../config.json";

const DetailPage = () => {
  const [video, setVideo] = useState({});
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [status, setStatus ]= useState("");

  useEffect(() => {
    setIsLoading(true);
    axios.get(config.API +  "/media/" + id)
    .then((res) => {
      setVideo(res.data);
      setIsLoading(false);
    });
  }, [id, status]);


  function addComment(event) {
    event.preventDefault();
    let comment = {
      comment: event.target[0].value,
      mediaId: id,
    }
    axios.post(config.API +"/media/add-comment", comment)
      .then((res) => {
        setStatus(res.data);
        setStatus("");
      })
  }

  function upvote(event) {
    event.preventDefault();

  }


  if (isLoading) {
    return <></>;
  } else {
    console.log(video.comments);
    return (
      <Content>
        <Post>
          <Title>{video.title}</Title>
          <Video url={video.url} />
          <Upvote onClick={upvote}/>
          <Downvote onClick={upvote}/>
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
        </CommentContainer>
      </Content>
    );
  }
};

export default DetailPage;
