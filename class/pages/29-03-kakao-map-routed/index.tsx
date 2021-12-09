import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapRoutedPage() {
  //   const myStyle = {
  //     width: "500px",
  //     height: "400px",
  //   };

  // 밑에 방식이 맵을 그리고 싶은 페이지에서만 실행할수있어서 이 방식이 제일 효울적임

  // 일단 먼저 맵을 그려놓고 useEffect 로 써서 맵을 그리는거임
  useEffect(() => {
    // 여기서 스크립트를 하고 기다렸다가 실행
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f838ca83e2835f9b0d0a9e92a075ecb8"; // <srcript src= "......">
    // 헤드 부분에 자식을 넣어주는거임
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.411447, 127.128594), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <>
      {/* 이 헤드 부분을 _app.ts 로 아예 옮겨버림  처음부터 다운받아올수있게 그치만 이건 너무 비효율적*/}
      {/* 기존 방식으로 여기다가 router.push 해버리면 너무 빨라서 속도를 따라가지를 못함  */}
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f838ca83e2835f9b0d0a9e92a075ecb8"
        ></script>
      </Head> */}
      {/* // this is pure HTML JavaScript but we use JSX(JavaScript XML) */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      {/* // <div id="map" style={myStyle}></div> */}
    </>
  );
}
