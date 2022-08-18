import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Footer from '../components/footer';
import SectionTitle from '../components/sectionTitle';
import Image from 'next/image';

const skillImages = [
  { src: '/figma.png', title: 'Figma' },
  { src: '/bootstrap.png', title: 'Bootstrap 5' },
  { src: '/css-3.png', title: 'CSS 3' },
  { src: '/js.png', title: 'JavaScript' },
  { src: '/react.png', title: 'React JS' },
  { src: '/sass.png', title: 'SASS' },
  {
    src: '/styled-components.png',
    title: 'React Styled Components',
  },
  { src: '/nextjs.png', title: 'Next JS' },
  { src: '/tailwind.png', title: 'Tailwind CSS' },
  { src: '/git.png', title: 'Git' },
];
const Skills = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Head>
          <title>Portfolio | Skills</title>
          <link rel='shortcut icon' href='skills.png' type='image/x-icon' />
          <meta property='og:title' content='Portfolio | Skills' key='title' />
        </Head>
        <div className='md:min-h-[80vh] p-5 lg:p-20 rounded-xl shadow-md shadow-gray-300  border border-gray-50 bg-gradient-to-tr from-gray-800 to-gray-500'>
          <SectionTitle sectionName='My Skills' />
          <div className='w-[100%] min-h-96 grid lg:grid-cols-3 grid-cols-2 gap-10 pb-10 mt-10 place-items-center text-center'>
            {skillImages.map((skill, index) => {
              return (
                <div key={index}>
                  <Image
                    src={skill.src}
                    alt={skill.title}
                    width='90vw'
                    height='90vh'
                    objectFit='contain'
                  />
                  <p className='mt-2'>{skill.title}</p>
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

export default Skills;
