import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const MyHeadTags = () => (
    <Head>
      <title key='title'>Portfolio</title>
    </Head>
  );
  return (
    <>
      <MyHeadTags />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
