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
        <div className='md:min-h-[80vh] p-20 rounded-xl shadow-md shadow-gray-300  border border-gray-50 bg-gradient-to-tr from-gray-900 to-gray-700'></div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Projects;
