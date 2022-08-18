import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Footer from '../components/footer';

const Contact = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Head>
          <title>Portfolio | Contact</title>
          <link rel='shortcut icon' href='contact.png' type='image/x-icon' />
          <meta property='og:title' content='Portfolio | Contact' key='title' />
        </Head>
        <div className='md:min-h-[80vh] p-5 lg:p-20 rounded-xl shadow-md shadow-gray-300  border border-gray-50 bg-gradient-to-tr from-gray-900 to-gray-700'></div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contact;
