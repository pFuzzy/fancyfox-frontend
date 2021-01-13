import React from "react";
import {
  Title,
  Input,
  FlexBoxRow,
  FlexBoxColumn,
  Button,
} from "../styled-components/AddPostStyle";
import { Content, Post } from "../styled-components/ContentStyle";

const AddPost = () => {
  return (
    <Content>
      <Post>
        <FlexBoxColumn>
          <FlexBoxRow>
            <Title>Video title:</Title>
            <Input type="text" />
          </FlexBoxRow>
          <FlexBoxRow>
            <Title>Video URL:</Title>
            <Input type="text" />
          </FlexBoxRow>
          <Button>Add</Button>
        </FlexBoxColumn>
      </Post>
    </Content>
  );
};

export default AddPost;
