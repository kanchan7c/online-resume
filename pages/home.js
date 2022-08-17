import React from 'react';
import Head from 'next/head';
import Wrapper from '../components/wrapper';
import Header from '../components/header';
import Footer from '../components/footer';
import Link from 'next/link';
import Button from '../components/button';

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
        <div className='flex justify-center align-middle flex-col text-center md:min-h-[80vh] p-20 rounded-xl shadow-md shadow-gray-300  border border-gray-50 bg-gradient-to-tr from-gray-900 to-gray-700'>
          <div className='font-thin text-xs md:text-lg mb-4'>Hi there!</div>
          <div className='font-semibold text-4xl md:text-6xl mb-4'>
            I&apos;m Kanchan
          </div>
          <div className='bg-gradient-to-tr from-cyan-500 to-gray-100 text-transparent bg-clip-text text-2xl md:text-3xl font-extralight'>
            Frontend Web Developer &amp; Web Designer
          </div>
          <div className='mt-10 flex align-middle justify-center gap-5 w-[100%]'>
            <Link href='/about'>
              <Button url='/about'>Know More</Button>
            </Link>
            <Button
              url='https://docs.google.com/document/d/15R40sSthTAR8UI2xBTL0qUDfRelQbmdZf7SmmsvgIfI/edit'
              target='_blank'
              rel='noreferrer'
              download
            >
              Download CV
            </Button>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default HomePage;
