import { readdirSync, readFileSync } from "fs";
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
  // matter라이브러리르 통하여 화면단에 보여줄 수 있다.
  const content = readdirSync("./exFile").forEach((file) => {
    return readFileSync(`./exFile/${file}`, "utf-8");
  });

  return {
    props: {
      data,
    },
  };
}
