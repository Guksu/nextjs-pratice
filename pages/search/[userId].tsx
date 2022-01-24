function SearchUser({ data }: any) {
  // useRouter를 통해 변수를 지정 가능하다.(변수는 query로 반환)

  return (
    <>
      <h2>{data.id}</h2>
      <h2>{data.content}</h2>
    </>
  );
}

export default SearchUser;

// Dynamic Routes를 사용하기 위한 방법으로 SSG를 활용할 수 있다.
export async function getStaticPaths() {
  // 예시
  // const res = await fetch(`https:fake/DB`);
  // const data = await res.json();
  // const paths = data.map((item: any) => {
  // params: {
  //   userId: item.id;
  // }
  // });

  // fallback이 false인 경우 userId를 3으로 입력할 경우 404페이지로 이동한다.
  return {
    paths: [{ params: { userId: "1" } }, { params: { userId: "2" } }],
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  //예시
  // const res = await fetch(`https:fake/DB/${params.id}`);
  // const data = await res.json();
  return {
    props: {
      data: { id: "111", content: "kakaka" },
    },
  };
}
