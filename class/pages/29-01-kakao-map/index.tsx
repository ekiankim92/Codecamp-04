import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  //   const myStyle = {
  //     width: "500px",
  //     height: "400px",
  //   };

  // 일단 먼저 맵을 그려놓고 useEffect 로 써서 맵을 그리는거임
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(37.411447, 127.128594), // 지도의 중심좌표.
      level: 3, // 지도의 레벨(확대, 축소 정도)
    };
    const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f838ca83e2835f9b0d0a9e92a075ecb8"
        ></script>
      </Head>
      {/* // this is pure HTML JavaScript but we use JSX(JavaScript XML) */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      {/* // <div id="map" style={myStyle}></div> */}
    </>
  );
}
