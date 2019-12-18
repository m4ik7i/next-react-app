import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const App = styled.div`
  text-align: center;
`;

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img.attrs(() => ({
  src: logo,
  alt: 'logo',
}))`
  height: 40vmin;
`;

const AppLink = styled.a.attrs(() => ({
  href: 'https://reactjs.org',
  target: '_blank',
  rel: 'noopener noreferrer',
}))`
  color: #09d3ac;
`;

export default (props) => (
  <App {...props}>
    <AppHeader>
      <AppLogo />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <AppLink>Learn React</AppLink>
    </AppHeader>
  </App>
);
