import { useEffect } from "react";
import KakaoMapUI from "./map.presenter";
import { IPropsKakaoMap } from "./map.types";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMap(props: IPropsKakaoMap) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=f838ca83e2835f9b0d0a9e92a075ecb8&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.411447, 127.128594),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        let geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.address,
          function (result: any, status: any) {
            if (status === window.kakao.maps.services.Status.OK) {
              let coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              let marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });
              let infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">Location</div>',
              });
              infowindow.open(map, marker);
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address]);
  return <KakaoMapUI />;
}
