import React from 'react';
import Head from 'next/head';
import App from '../src/components/App';

const IndexPage = () => (
  <>
    <Head>
      <title>React App</title>
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
    <App />
  </>
);

export default IndexPage;
