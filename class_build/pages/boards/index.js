import Head from "next/head";

export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나만의 사이트 게시판!" />
        <meta property="og:url" content="http://sookheewoof.shop" />
        <meta
          property="og:image"
          content="https://w.namu.la/s/7085672eaa484a5967b0bb04bf063e432864a9e768c852796cdc0df0c07c3e511a0feeda5c4a451357aab58d45c9478bf2244840a4c361b4284ed835b36429f5b54924e2b7056375ac32a965f8fef1655c13e8ae781653edc6516a7007f9b645"
        />
        <meta property="og:description" content="마음을 불태워라" />
      </Head>
      <div>안녕하세요! 게시판입니다!</div>
    </>
  );
}
