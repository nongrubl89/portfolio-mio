import Page from '../components/Page';
import '@fortawesome/fontawesome-svg-core/styles.css';

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
