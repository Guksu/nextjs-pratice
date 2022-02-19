import Document, { Head, Html, Main, NextScript } from "next/document";

// document는 server에서 한번 랜더링된다.
// 이곳에서 폰트등을 설정할 수 있다.
class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ko">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
