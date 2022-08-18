import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Footer from '../components/footer';
import SectionTitle from '../components/sectionTitle';

const Experience = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Head>
          <title>Portfolio | Experience</title>
          <meta
            property='og:title'
            content='Portfolio | Contact'
            key='experience'
          />
          <link rel='shortcut icon' href='work.png' type='image/x-icon' />
        </Head>
        <div className='md:min-h-[80vh] p-5 lg:p-20rounded-xl shadow-md shadow-gray-300  border border-gray-50 bg-gradient-to-tr from-gray-900 to-gray-700'>
          <SectionTitle sectionName='My Work Experience' />
          <div className='flex flex-col align-middle gap-10 p-5'>
            <div>1 Motif India Infotech </div>
            <div>2 Accenture</div>
            <div>3 Career Break</div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Experience;
