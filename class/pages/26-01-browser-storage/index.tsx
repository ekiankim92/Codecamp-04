export default function BrowserStoragePage() {
  const onClickSetCookie = () => {
    document.cookie = "aaa=철수";
    // key value 이긴한데 는 으로 표현함
  };

  const onClickSetLocalStorage = () => {
    localStorage.setItem("bbb", "영희");
    // key 와 value 로 넣음
  };

  const onClickSetSessionStorage = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClickGetCookie = () => {
    // "aaa=철수; ddd=맹구; zzz=짱구".split("; ").filter(el => el.startsWith("zzz="))[0];

    const zzz = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("zzz="))[0]; // "zzz=짱구"
    // zzz.split("=")[1] // ["zzz", "짱구"]
    // console.log(myCookie);
    console.log(zzz.split("=")[1]);

    // 토근같은 중요한 정보를 담게 되면 탈취될수있으니, 중요한 내용은 적지않는다
  };

  const onClickGetLocalStorage = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
    // 브라우저에 저장
  };

  const onClickGetSessionStorage = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
    // 브라우저를 껐다 켜면 사라지는 아이
  };

  return (
    <>
      <button onClick={onClickSetCookie}>쿠키에 저장하기</button>
      <button onClick={onClickSetLocalStorage}>로컬 스토리지에 저장하기</button>
      <button onClick={onClickSetSessionStorage}>
        세션 스토리지에 저장하기
      </button>
      =========================================================
      <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button>
      <button onClick={onClickGetLocalStorage}>
        로컬스토리지에 있는 값 가져오기
      </button>
      <button onClick={onClickGetSessionStorage}>
        세션스토리지에 있는 값 가져오기
      </button>
    </>
  );
}
