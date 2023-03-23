/* eslint-disable react/prop-types */
import { config } from '@fortawesome/fontawesome-svg-core';
import Page from '../components/Page';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Head from 'next/head';

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.41, maximum-scale=1"
        />
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
