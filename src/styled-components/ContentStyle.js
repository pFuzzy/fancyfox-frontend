import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Vote from '../images/Vote.png';


export const Content = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  top: 6vh;
  background-color: #3f4e66;
`;

export const Post = styled.div`
  position: relative;
  max-width: 640px;
  height: 450px;
  margin: auto;
  margin-top: 20px;
  background-color: #82c0d9;
  padding: 20px;
  border-radius: 10px;
  border: 2px #82c0d9 solid;
  :hover {
    border: 2px #ffa500 solid;
  }
`;

export const Video = styled(ReactPlayer)`
  position: absolute;
  margin-top: 20px; 
  width: 30vw;
  left: 50%;
  transform: translate(-50%, 0);
  @media (max-width: 660px){
    left: 50%;
    transform: translate(-50%, 0) scale(0.8, 0.8);
  }
`;

export const Title = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 26px;
  font-weight: bold;
  :hover {
    color: #ff9305 ;
  }
`;

export const Rating = styled.div`
  width: 50px;
  height: 25px;
  position: absolute;
  right: 5%;
  top: 10%;
  font-size: 18px;
  text-align: center;
`;

export const Upvote = styled(Link)`
  position: absolute;
  right: 5%;
  top: 5%;
  background-image: url(${Vote});
  width: 50px;
  height: 25px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25px 25px;
  filter: grayscale(100%);
  transition: 200ms;
  :hover{
    filter: grayscale(0);
    transition: 200ms;
  }
`;

export const Downvote = styled(Link)`
  position: absolute;
  right: 5%;
  top: 15%;
  background-image: url(${Vote});
  width: 50px;
  height: 25px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25px 25px;
  transform: rotate(180deg);
  filter: grayscale(100%) hue-rotate(250deg);
  transition: 200ms;
  :hover{
    filter: grayscale(0) hue-rotate(250deg);
    transition: 200ms;
  }
`;
