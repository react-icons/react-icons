import "@styles/global.scss";

import Container from "@components/@core/content";
import Sidebar from "@components/@core/sidebar";
import { BRAND_TITLE } from "@utils/constants";
import { Provider } from "@utils/search-context";
import NextApp, { AppContext } from "next/app";
import Head from "next/head";
import React from "react";

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
