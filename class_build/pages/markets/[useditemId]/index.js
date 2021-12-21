import Head from "next/head";
import { request, gql } from "graphql-request";

// this page must be doing 24/7 of yarn dev

export default function MarketsPage(props) {
  return (
    <>
      <Head>
        <meta property="og:title" content={props.fetchUseditem.name} />
        {/* <meta property="og:url" content="http://sookheewoof.shop" /> */}
        <meta
          property="og:image"
          content={`https://storage.googleapis.com/${props.fetchUseditem.images[0]}`}
        />
        <meta property="og:description" content={props.fetchUseditem.remarks} />
      </Head>
      <div>안녕하세요! 상품페이지입니다!</div>
    </>
  );
}

// getServerSideProps: this is provided from next.js so this must match exactly so that this page
// will be doing the SSR (this page will be doing SSR only)

// will be going to the props on top of this page

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      remarks
      images
    }
  }
`;

// 밑 작업을 먼저 하고 위에 올라가서 props 로 넘겨줌
// next.js 가 기본적으로 router 도 넣어줌
// 그 위에 더 많은 정보를 넣어주는걸 context
export const getServerSideProps = async (context) => {
  const result = await request(
    "https://backend04.codebootcamp.co.kr/graphql",
    FETCH_USED_ITEM,
    { useditemId: context.query.useditemId }
  );

  return {
    // this props is mandatory
    props: {
      // this is just a name we create
      fetchUseditem: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images[0],
      },
    },
  };
};
