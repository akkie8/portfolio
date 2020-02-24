import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';

import Header from './components/Header';
import Profile from './components/Profile';
import Timeline from './components/Timeline';

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    color: #333333;
    background-color: #ffffff;
    font-size: 100%;
    line-height: 1.7;
    -webkit-text-size-adjust: 100%;
    font-family: "Sawarabi Gothic";
  }
`;

const StyledTypography = styled(Typography)`
  text-align: center;
  margin: 0 auto 10px;
`;

const MainTitle = styled.div`
  width: 250px;
  text-align: center;
  font-size: 30px;
  margin: 0 auto 10px;
  color: #515e64;
  border-bottom: solid 4px #515e64;
`;

const ContactWrap = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

const DMText = styled.div`
  width: 300px;
  margin: auto;
  word-break: keep-all;
  font-size: 14px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Profile />
      <Timeline />
      <MainTitle>contact</MainTitle>
      <ContactWrap>
        <DMText>お仕事依頼・お問い合わせは 下記DMにて</DMText>
        <a href="https://www.instagram.com/akistagram_jp/">
          <IconButton aria-label="delete" color="default">
            <InstagramIcon />
          </IconButton>
        </a>
        <a href="https://twitter.com/akiy_8">
          <IconButton aria-label="delete" color="default">
            <TwitterIcon />
          </IconButton>
        </a>
        <a href="https://github.com/akkie8">
          <IconButton aria-label="delete" color="default">
            <GitHubIcon />
          </IconButton>
        </a>
      </ContactWrap>
      <StyledTypography variant="caption" display="block" gutterBottom>
        &copy; 2020 Aki Yamada
      </StyledTypography>
    </>
  );
}

export default App;
