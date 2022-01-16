import type { NextPage } from "next";
import Head from "next/head";

export default function Home({ results }: any) {
  return (
    <>
      <Head>
        <title>NextJs Pratice</title>
      </Head>
      <h1>hi</h1>
      <h1>{results}</h1>
    </>
  );
}

export async function getServerSideProps() {
  const results = "This is SSR";
  return {
    props: {
      results,
    },
  };
}
