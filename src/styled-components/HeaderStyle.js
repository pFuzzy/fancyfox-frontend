import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  display: flex;
  text-align: center;
  font-weight: bold;
  color: blue;
  width: 100vw;
  height: 6vh;
  border-bottom:2px #3f4e66 solid ;
  background-color: #82c0d9;
`;

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: auto;
  margin-top: 0.25vh;
  height: 5.5vh;
`;

export const AddButton = styled(Link)`
  position: fixed;
  right: 0;
  width: 15vh;
  margin-top: 1vh;
  margin-right: 1vw;
  padding: 0.4vh;
  font-size: 2.5vh;
  height: 3vh;
  text-decoration: none;
  color: #3f4e66;
  background-color: #ffa500;
  border-radius: 30px;
  :hover {
    color: lightblue;
    background-color: blue;
  }
`;
