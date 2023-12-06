import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import CustomToaster from "@/components/Toast/Toast";
import "@/styles/_base.scss";
import "@/styles/CustomDatePicker.scss";
import favicon from 'public/favicon.ico';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Coditas | Building Exceptional Software Solutions with Clean Code
          Practices
        </title>
        <link rel="icon" type="image/svg+xml" href={favicon?.src}/>
        <meta
          name="description"
          content="Unleash business growth by seamlessly integrating our product engineering, legacy modernization, and design, empowering enterprises to thrive in the digital age."
          key="description"
        />
        <meta
          name="image"
          content="https://events-cover.s3.ap-south-1.amazonaws.com/Coditas.png"
          key="image"
        />
        <meta
          property="og:image"
          content="https://events-cover.s3.ap-south-1.amazonaws.com/Coditas.png"
          key="og:image"
        />
        <meta
          property="og:title"
          content="Coditas | Building Exceptional Software Solutions with Clean Code Practices"
          key="og:title"
        />

        <meta
          property="og:description"
          content="Unleash business growth by seamlessly integrating our product engineering, legacy modernization, and design, empowering enterprises to thrive in the digital age."
          key="og:description"
        />
      </Head>

      <Layout headerFooterData={pageProps?.headerFooterResp?.attributes}>
        <Component {...pageProps} />
        <CustomToaster />
      </Layout>
    </>
  );
}
