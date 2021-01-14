import styled from 'styled-components';


export const Title = styled.h1`
  color: black;
  font-size: 26px;
  font-weight: bold;`;

export const CommentContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 40vh;
  padding-top: 30px;
  position: absolute;
  background-color: #3f4e66;
`;

export const Comment = styled.div`
  position: relative;
  max-width: 640px;
  height: auto;
  margin: auto;
  margin-top: 5px;
  background-color: #82c0d9;
  padding: 20px;
  border-radius: 10px;
  border: 2px #82c0d9 solid;
  font-size: 16px;
  text-align: justify ;
  :hover {
    border: 2px #ffa500 solid;
  }
`;

export const CommentForm = styled.form`
position: relative;
  max-width: 640px;
  height: auto;
  margin: auto;
  background-color: #ffa500;
  padding: 20px;
  border-radius: 10px;
  border: 2px #82c0d9 solid;
  text-align: center;
`;

export const CommentFormTextArea = styled.textarea`
  position: relative;
  width: 600px;
  height: 100px;;
  margin: auto;
  resize: none;
  background-color: #82c0d9;
  border-radius: 10px;
  border: 2px #82c0d9 solid;
  padding: 18px;
  text-align: justify;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const CommentFormButton = styled.button`
  margin-top: 8px;
  width: 80px;
  height: 25px;
  text-decoration: none;
  color: #3f4e66;
  background-color: #82c0d9;
  border-radius: 30px;
  :hover {
    color: lightblue;
    background-color: blue;
  }
`;

export const CommentLabel = styled.label`
  font-weight: bold;
  font-size: 20px;
`;



