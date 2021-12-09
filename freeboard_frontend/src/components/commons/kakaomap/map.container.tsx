import { useEffect } from "react";
import KakaoMapUI from "./map.presenter";
import { useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const onChangeLat = (event) => {
    setLatitude(event.taget.value);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f838ca83e2835f9b0d0a9e92a075ecb8";

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.411447, 127.128594),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        const marker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });

        marker.setMap(map);

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent) {
            const latlng = mouseEvent.latLng;

            marker.setPosition(latlng);

            // const message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
            // message += "경도는 " + latlng.getLng() + " 입니다";
          }
        );
      });
    };
  }, []);

  return <KakaoMapUI />;
}
