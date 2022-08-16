import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Footer from '../components/footer';

const About = () => {
  return (
    <>
      <Header />
      <Wrapper id='about'>
        <Head>
          <title>Portfolio | About</title>
          <link rel='shortcut icon' href='about.png' type='image/x-icon' />
        </Head>
        About
      </Wrapper>
      <Footer />
    </>
  );
};

export default About;
