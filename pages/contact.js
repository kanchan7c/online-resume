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
        contact
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contact;
