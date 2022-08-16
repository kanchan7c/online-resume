import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Footer from '../components/footer';

const Skills = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Head>
          <title>Portfolio | Skills</title>
          <link rel='shortcut icon' href='skills.png' type='image/x-icon' />
        </Head>
        skills
      </Wrapper>
      <Footer />
    </>
  );
};

export default Skills;
