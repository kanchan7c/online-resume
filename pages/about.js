import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Footer from '../components/footer';
import SectionTitle from '../components/sectionTitle';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/button';

const About = () => {
  return (
    <>
      <Header />
      <Wrapper id='about'>
        <Head>
          <title>Portfolio | About</title>
          <link rel='shortcut icon' href='about.png' type='image/x-icon' />
          <meta property='og:title' content='Portfolio | About' key='title' />
        </Head>
        <div className='md:min-h-[80vh] p-5 lg:p-20 rounded-xl shadow-md shadow-gray-300  border border-gray-50 bg-gradient-to-tr from-gray-900 to-gray-700'>
          <SectionTitle sectionName='About Me' />
          <div className='flex xl:justify-between xl:align-middle xl:flex-row flex-col lg:my-10 my-5 lg:pt-10 pt-5'>
            <div className='p-1 lg:w-[40vw] 2xl:w-[40vw] h-[20vh] lg:h-[30vh] xl:h-[40vh] xl:2-[30vw] 2xl:h-[50vh]  relative w-full mb-10'>
              <Image
                src='/images/avatar.png'
                alt='avatar'
                layout='fill'
                objectFit='contain'
                className='overflow-hidden'
              />
            </div>
            <div className='xl:ml-10 w-full xl:w-[50%] mx-auto text-center lg:text-left'>
              <p className='lg:text-lg text-xs font-thin text-cyan-600 font-mono tracking-widest'>
                WELCOME!
              </p>
              <h2 className='lg:text-6xl text-4xl my-2'>
                Let&apos;s break the ice.
              </h2>
              <p className='lg:text-xl text-lg text-cyan-400 mt-4'>
                I&apos;m a Frontend Web Developer & Web Designer.
              </p>
              <p className='text-md lg:text-lg tracking-wider my-8 paragraph lg:w-[90%] italic'>
                Having attention to the details and my love for modern web
                design has brought me immense joy while working on my personal
                projects. I come with great experience in Business Operations
                and Communications which helps me fluently share my ideas to my
                colleagues as well as clients. I&apos;m aspiring to get a break
                through towards making my career in Web Development.
              </p>
              <div className='flex justify-center lg:justify-start mb-5'>
                <Link href='/skills'>
                  <Button url='/skills'>Know More About Me..</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default About;
