import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Footer from '../components/footer';

const Experience = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Head>
          <title>Portfolio | Experience</title>
          <link rel='shortcut icon' href='work.png' type='image/x-icon' />
        </Head>
        experience
      </Wrapper>
      <Footer />
    </>
  );
};

export default Experience;
