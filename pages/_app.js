import "../styles/globals.css";
import Page from "../components/Page";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default MyApp;
