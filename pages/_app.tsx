import type { AppProps } from "next/app";
import Script from "next/script";
import Layout from "../components/Layout";

// 가장 먼저 랜더링 되는 컴포넌트이다.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        <Script src="카카오" />
      </Layout>
    </>
  );
}

export default MyApp;
