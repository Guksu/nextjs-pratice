## **Next.JS이론공부**

- Next.JS는 React와 달리 HTML코드를 Pre-rendering하고 JS를 load하기 때문에 브라우저에서 JS가 작동하지 않아도 HTML코드는 사용자가 볼 수 있다.
- Next.JS는 기본적으로 현재 열린 페이지만 load하지만 Link를 사용하면 Link에 연결된 페이지도 background에서 미리 prefetches 시킨다.
- Next.JS는 기본적으로 Static-Site-Generation(SSG)를 지원하며 Server-Side-Rendering(SSR)또한 지원한다.
- SSG는 한번 빌드되지만 SSR은 req시마다 빌드된다.
- SSG의 경우 build타임에 렌더링된 파일을 보내주므로 사용자별로 추천광고를 제공하는등의 페이지에선 사용하기 힘들다. 즉 , 블로그처럼 한 페이지에서 바뀌는 내용이 별로 없는 페이지에 적절하다.
- Next.JS는 endpoint를 만들 수 있으며 이는 api폴더에서 이루어진다.
- API Route에선 getStaticProps or getStaticPaths를 사용해선 안 된다. API Route의 코드들은 server의 코드를 작성하는것으로 client상에서 실행되지 않는다.
