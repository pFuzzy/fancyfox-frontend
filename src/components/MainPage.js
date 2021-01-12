import React from 'react';
import { AddButton, Header, Logo } from '../styled-components/Header';
import FancyFox from '../images/FancyFox.png';

const MainPage = () => {
  return (
    <div>
      <Header>
        <Logo src={FancyFox} alt='FancyFoxLogo' />
        <AddButton to='/add'>Add post</AddButton>
      </Header>
    </div>
  );
};

export default MainPage;
