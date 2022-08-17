import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Footer from '../components/footer';

const Projects = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Head>
          <title>Portfolio | Projects</title>
          <link rel='shortcut icon' href='projects.png' type='image/x-icon' />
          <meta
            property='og:title'
            content='Portfolio | Projects'
            key='title'
          />
        </Head>
        projects
      </Wrapper>
      <Footer />
    </>
  );
};

export default Projects;
