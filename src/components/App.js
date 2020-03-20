import React from 'react';
import logo from './logo.svg';

const App = (props) => (
  <div className="App" css={{ textAlign: 'center' }}>
    <header
      css={{
        backgroundColor: '#282c34',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        color: 'white',
      }}
    >
      <img src={logo} alt="logo" css={{ height: '40vmin' }} />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" css={{ color: '#09d3ac' }}>
        Learn React
      </a>
    </header>
  </div>
);

export default App;
