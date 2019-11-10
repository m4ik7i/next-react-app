import React from 'react';
import Head from 'next/head';
import App from '../src/components/App';

import './index.css';

const IndexPage = () => (
  <>
    <Head>
      <title>React App</title>
      <link rel="icon" href="/static/favicon.ico" importance="low" />
    </Head>
    <App />
  </>
);

export default IndexPage;
