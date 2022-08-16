import React from 'react';
import Head from 'next/head';
import Wrapper from '../components/wrapper';

const HomePage = () => {
  return (
    <Wrapper>
      <Head>
        <title>Portfolio | Home</title>
        <link rel='shortcut icon' href='home.png' type='image/x-icon' />
      </Head>
      <p>This is homepage</p>
    </Wrapper>
  );
};

export default HomePage;
