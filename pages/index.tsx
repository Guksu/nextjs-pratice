import { NextPageContext } from "next";
import Head from "next/head";

export default function Home({ results }: any) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>hi</h1>
      <h1>{results}</h1>
    </>
  );
}

// SSR
export async function getServerSideProps(ctx: NextPageContext) {
  const results = "This is SSR";
  return {
    props: {
      results,
    },
  };
}
