import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Footer from '../components/footer';
import SectionTitle from '../components/sectionTitle';
import Image from 'next/image';

const Experience = () => {
  const work = [
    {
      company: 'Career Break',
      duration: '(Jan 2022 - Present)',
      icon: '/break.png',
      position: 'Full-time Parenting',
      desc: 'I have taken a break from work to take care of my kid. During this break I have devoted my time towards learning Web Design and Development.',
    },
    {
      company: 'Accenture, Gurgaon ',
      duration: '(Jan 2019 - Jan 2022 | 3 years)',
      icon: '/accenture.png',
      position: 'Instructor Analyst',
      desc: 'This role required extensive interaction with colleagues as well as off-shore clients. Presentation skills and ability to make others understand with effective communication. ',
    },
    {
      company: 'Motif India, Ahmedabad (Now ttec)',
      duration: '(June 2016 - July 2018 | 2 years)',
      icon: '/motif.png',
      position: 'Support Executive',
      desc: 'I was responsible for setting offshore customers up for success by helping them resolve the issues',
    },
  ];

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
          <div className='flex align-middle flex-col justify-center gap-10 p-5'>
            {work.map((item, index) => {
              return (
                <div
                  key={index}
                  className='flex align-middle space-between gap-10 lg:px-40 my-3 lg:my-4'
                >
                  <p className='numbers text-lg sm:text-2xl lg:text-8xl text-gray-400'>
                    {++index}
                  </p>
                  <div>
                    <p className='relative flex align-middle lg:gap-3 gap-1'>
                      <Image
                        src={item.icon}
                        alt={item.company}
                        width='25px'
                        height='25px'
                        objectFit='contain'
                        className='rounded-full mr-5'
                      />
                      <span className='lg:text-2xl md:text-xl text-sm sm:text-lg'>
                        {item.company}
                      </span>
                      <span className=' grid place-items-center text-cyan-400 text-xs font-thin'>
                        {item.duration}
                      </span>
                    </p>
                    <p className='lg:text-xl text-xs sm:text-md my-3 text-gray-400'>
                      {item.position}
                    </p>
                    <p className='lg:w-[70%] font-light text-xs sm:text-md my-3 paragraph'>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Experience;
