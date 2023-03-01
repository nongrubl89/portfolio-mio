import Head from 'next/head';
import HomePage from '../components/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lisas Portfolio</title>
        <meta name="description" content="Generated by moi :)" />
      </Head>
      <HomePage />
    </>
  );
}
