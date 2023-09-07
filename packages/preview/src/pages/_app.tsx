import "@styles/global.scss";

import Container from "@components/@core/content";
import Sidebar from "@components/@core/sidebar";
import { BRAND_TITLE } from "@utils/constants";
import NextApp from "next/app";
import Head from "next/head";
import React from "react";

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}

class App extends NextApp<Props> {
  render() {
    const { pageProps, Component } = this.props;
    return (
      <>
        <Sidebar />
        <Head>
          <title>{BRAND_TITLE}</title>
        </Head>
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    );
  }
}

export default App;
