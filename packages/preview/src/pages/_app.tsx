import "@styles/global.scss";

import Container from "@components/@core/content";
import Head from "next/head";
import NextApp from "next/app";
import Sidebar from "@components/@core/sidebar";
import { BRAND_TITLE } from "@utils/constants";
import { Provider } from "@utils/search-context";

interface Props {
  pageProps: any;
}

class App extends NextApp<Props> {
  render() {
    const { pageProps, Component } = this.props;
    return (
      <Provider>
        <>
          <Sidebar />
          <Head>
            <title>{BRAND_TITLE}</title>
          </Head>
          <Container>
            <Component {...pageProps} />
          </Container>
        </>
      </Provider>
    );
  }
}

export default App;
