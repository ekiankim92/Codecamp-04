export default function MapELPage() {
  // return `${el}어린이`
  // map 이라는걸 뭔갈 되돌려 놔야하는데. map 은 그래서 return 값이 있어야함
  // map 방법
  //   ["철수", "영희", "훈이"].map((el, index) => {
  //     console.log("el", el);
  //     console.log("index", index);
  //     return "";
  //   });

  // 1. 기본 방법 (화살표 함수)
  // forEach 방법
  //   ["철수", "영희", "훈이"].forEach((el, index) => {
  //     console.log("el", el);
  //     console.log("index", index);
  //   });

  //   2. 기본 방법 (그냥 함수)
  //   ["철수", "영희", "훈이"].forEach(function (el, index) {
  //     console.log("el", el);
  //     console.log("index", index);
  //   });

  // forEach도 () 이라서 함수인데 저기에 더 큰 함수를 넣은거임
  // 함수안에 함수로 인자로 들어갈수있는데, 그걸 콜백 함수라고 부른다

  //   3. 매게변수 바꿔보기
  //   ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
  //     console.log("asdf", asdf);
  //     console.log("qwer", qwer);
  //   });

  //   4. el 과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log("index", index);
    console.log("el", el);
  });

  return <></>;
}
