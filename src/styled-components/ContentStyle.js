import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
  width: 100vw;
  height: auto;
  position: absolute;
  top: 6vh;
  background-color: grey;
`;

export const Post = styled.div`
  position: relative;
  max-width: 640px;
  height: 450px;
  margin: auto;
  margin-top: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
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
  :hover {
    color: red;
  }
`;

export const Rating = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  font-size: 28px;
`;
