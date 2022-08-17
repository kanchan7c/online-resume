import React from 'react';
import Head from 'next/head';
import Wrapper from '../components/wrapper';
import Header from '../components/header';
import Footer from '../components/footer';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Home</title>
        <link rel='shortcut icon' href='home.png' type='image/x-icon' />
        <meta property='og:title' content='Portfolio | Home' key='title' />
      </Head>
      <Header />
      <Wrapper>
        <p>This is homepage</p>
      </Wrapper>
      <Footer />
    </>
  );
};

export default HomePage;
