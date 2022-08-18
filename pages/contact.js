import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Footer from '../components/footer';
import SectionTitle from '../components/sectionTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

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
        <div className='md:min-h-[50vh] p-5 lg:p-20 rounded-xl shadow-md shadow-gray-300  border border-gray-50 bg-gradient-to-tr from-gray-900 to-gray-700'>
          <SectionTitle sectionName="Let's Get In Touch" />

          <h2 className='lg:text-3xl text-xl text-center mt-10 mb-5 text-cyan-200 numbers'>
            Would love to hear from you!
          </h2>
          <div className='flex lg:gap-5 gap-3 align-middle justify-center mt-10 h-[50vh] w-[100%] flex-wrap'>
            <a
              href='https://github.com/kanchan7c'
              target='_blank'
              rel='noreferrer'
              className='text-6xl'
            >
              <GitHubIcon className='text-6xl cursor-pointer' />
            </a>

            <a
              href='https://www.linkedin.com/in/kanchan-chaudhary-a38568bb/'
              target='_blank'
              rel='noreferrer'
              className='text-6xl'
            >
              <LinkedInIcon className='text-6xl cursor-pointer' />
            </a>

            <a
              href='mailto:kanchan@shekharpro.com'
              className='text-6xl cursor-pointer'
            >
              <EmailIcon className='text-6xl cursor-pointer' />
            </a>
            <a
              href='https://www.facebook.com/profile.php?id=100010316479068'
              target='_blank'
              rel='noreferrer'
              className='text-6xl'
            >
              <FacebookIcon className='text-6xl cursor-pointer' />
            </a>

            <a
              href='https://www.instagram.com/kanchan_samaj_s/'
              target='_blank'
              rel='noreferrer'
              className='text-6xl'
            >
              <InstagramIcon className='text-6xl cursor-pointer' />
            </a>
            <a
              href='https://twitter.com/KanchanSamajS'
              target='_blank'
              rel='noreferrer'
              className='text-6xl'
            >
              <TwitterIcon className='text-6xl cursor-pointer' />
            </a>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Contact;
