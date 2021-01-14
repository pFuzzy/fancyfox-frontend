import styled from 'styled-components';
import {Link} from 'react-router-dom'


export const FlexBoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 500px;
  height: 100%;
  margin: auto;
`

export const FlexBoxRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: auto;
`

export const Title = styled.h1`
  padding: 0px;
  margin: 0px;
  font-size: 24px;
`

export const Input = styled.input`
  padding: 0px;
  margin: 0px;
  height: 24px;
  font-size: 16px;
  width: 300px;
`


export const Button = styled(Link)`
  position: relative;
  display: block;
  margin: auto;
  width: 100px;
  padding: 0.7vh 2vh;
  font-size: 2.5vh;
  height: 3vh;
  text-align: center;
  text-decoration: none;
  color: #3f4e66;
  background-color: #ffa500;
  border-radius: 30px;
  font-weight: bold;
  :hover {
    color: lightblue;
    background-color: blue;
  }
`;