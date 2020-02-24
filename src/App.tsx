import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import Profile from './components/Profile';
import Instagram from './components/Instagram';

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

function App() {
  return (
    <>
      <GlobalStyle />

      <Header />

      <Profile />

      <Instagram />

    </>
  );
}

export default App;
