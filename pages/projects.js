import React from 'react';
import Header from '../components/header';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Footer from '../components/footer';
import Card from '../components/card';

let data = [
  {
    title: 'Notes Web App',
    description:
      "This is a Web Application which runs into browser. We can add notes and delete them too. We can also create new notes. This is built using vanilla JS and uses local computer's memory to store notes.",
    imageURL: '/images/notes-app.png',
    visitingURL: 'https://dazzling-lamarr-952495.netlify.app/#',
    codeURL: 'https://github.com/kanchan7c/NotesApp',
    date: '10 Nov 2022',
    technologies: ['/js.png', '/css-3.png'],
  },
  {
    title: 'FIFA Player Search',
    description:
      'FIFA player search can be used to search FIFA 19 players. Following the search results will lead to details of the specific player.',
    imageURL: '/images/fifa-player-search.png',
    visitingURL: 'https://elegant-volhard-2770b9.netlify.app/',
    date: '21 Oct 2021',
    codeURL: 'https://github.com/kanchan7c/check-fifa-players',
    technologies: ['/react.png', '/css-3.png'],
  },
  {
    title: 'Nearme Eating Hub',
    description:
      'This layout is built using React JS for food & restaurant category of a imagined website named Nearme',
    imageURL: '/images/nearme.png',
    visitingURL: 'https://pedantic-kare-bc7b97.netlify.app/',
    date: '11 Feb 2022',
    codeURL: 'https://github.com/kanchan7c/nearme-react-project',
    technologies: ['/react.png', '/css-3.png'],
  },
  {
    title: 'Netflix Homepage Clone',
    description:
      'Netflix Homepage Clone is built using React JS. It uses themoviedb API to fetch data and display results. The mini video trailers are linked to the Youtube API',
    imageURL: '/images/netflix-copy.png',
    visitingURL: 'https://hardcore-ritchie-ef4313.netlify.app/',
    date: '16-Nov-2021',
    codeURL: 'https://github.com/kanchan7c/netflix-homepage-clone',
    technologies: ['/react.png', '/css-3.png'],
  },
  {
    title: 'Real Homes Real Estate Website',
    description:
      'This is an imaginary website names Real Homes which displays rental and on sale properties of UAE. Rapid API is serving data for this project. This project is built using NextJS and it has fully functional filters available for searching properties.  It also uses popular React libraries such as Framer Motion',
    imageURL: '/images/real-homes.png',
    visitingURL: 'https://practical-knuth-957e71.netlify.app/search',
    date: '21 Feb 2022',
    codeURL: 'https://github.com/kanchan7c/real_home',
    technologies: ['/react.png', '/css-3.png'],
  },
  {
    title: 'Tesla Homepage Copy',
    description:
      'Tesla Homepage Clone is created using React JS and styling is done using styled components',
    imageURL: '/images/tesla-copy.png',
    visitingURL: 'https://jolly-torvalds-7054d4.netlify.app/',
    date: '15 Nov 2022',
    codeURL: 'https://github.com/kanchan7c/tesla-homepage-clone-updated',
    technologies: ['/react.png', '/css-3.png'],
  },
  {
    title: 'Coding Services',
    description:
      'This is an imaginary Web Services provider website which is built using React JS and Bootstrap 5. This was my first pet project in React JS',
    imageURL: '/images/coding-services.png',
    date: '15 Oct 2021',
    visitingURL: 'https://coding-services.kanchan.shekhar.net/',
    codeURL: 'https://github.com/kanchan7c/CodingServices',
    technologies: ['/react.png', '/bootstrap.png'],
  },
];

const Projects = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Head>
          <title>Portfolio | Projects</title>
          <meta
            property='og:title'
            content='Portfolio | Projects'
            key='title'
          />
        </Head>
        <div className='md:min-h-[80vh] p-5 lg:p-20 rounded-xl shadow-md shadow-gray-300  border border-gray-50 bg-gradient-to-tr from-gray-900 to-gray-700'>
          <Card
            title={data[0].title}
            cardNumber={1}
            code={data[0].codeURL}
            demo={data[0].visitingURL}
            tech={data[0].technologies}
            snapshot={data[0].imageURL}
            description={data[0].description}
          />
          <Card
            title={data[1].title}
            cardNumber={2}
            code={data[1].codeURL}
            demo={data[1].visitingURL}
            tech={data[1].technologies}
            snapshot={data[1].imageURL}
            description={data[1].description}
          />
          <Card
            title={data[2].title}
            cardNumber={3}
            code={data[2].codeURL}
            demo={data[2].visitingURL}
            tech={data[2].technologies}
            snapshot={data[2].imageURL}
            description={data[2].description}
          />
          <Card
            title={data[3].title}
            cardNumber={4}
            code={data[3].codeURL}
            demo={data[3].visitingURL}
            tech={data[3].technologies}
            snapshot={data[3].imageURL}
            description={data[3].description}
          />
          <Card
            title={data[4].title}
            cardNumber={5}
            code={data[4].codeURL}
            demo={data[4].visitingURL}
            tech={data[4].technologies}
            snapshot={data[4].imageURL}
            description={data[4].description}
          />
          <Card
            title={data[5].title}
            cardNumber={6}
            code={data[5].codeURL}
            demo={data[5].visitingURL}
            tech={data[5].technologies}
            snapshot={data[5].imageURL}
            description={data[5].description}
          />
          <Card
            title={data[6].title}
            cardNumber={7}
            code={data[6].codeURL}
            demo={data[6].visitingURL}
            tech={data[6].technologies}
            snapshot={data[6].imageURL}
            description={data[6].description}
          />
        </div>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Projects;
