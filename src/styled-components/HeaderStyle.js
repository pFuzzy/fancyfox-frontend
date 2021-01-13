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
  background-color: lightblue;
`;

export const Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: auto;
  height: 6vh;
`;

export const AddButton = styled(Link)`
  position: fixed;
  right: 0;
  width: 7vw;
  margin-top: 1.3vh;
  margin-right: 1vw;
  font-size: 2.5vh;
  height: 3vh;
  text-decoration: none;
  color: blue;
  &:hover {
    color: lightblue;
    background-color: blue;
  }
`;
