import Head from "next/head";

function About({ data }: any) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <h1>about</h1>
      <h1>{data}</h1>
    </>
  );
}

export default About;

// SSG
export async function getStaticProps() {
  const data = "This is SSG";
  return {
    props: {
      data,
    },
  };
}
