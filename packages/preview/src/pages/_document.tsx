import {
  BRAND_DESCRIPTION,
  BRAND_KEYWORDS,
  BRAND_TITLE
} from "@utils/constants";
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <meta name="theme-color" content="#e91e63" />
          <meta name="title" content={BRAND_TITLE} />
          <meta name="description" content={BRAND_DESCRIPTION} />
          <meta name="keywords" content={BRAND_KEYWORDS} />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
