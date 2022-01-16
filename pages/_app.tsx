import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";

// 가장 먼저 랜더링 되는 컴포넌트이다.

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
