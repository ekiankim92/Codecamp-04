import * as S from "./OpenapiList.styles";

export default function OpenAPIPageUI(props) {
  return (
    <>
      <S.Wrapper>
        <div>강아지!</div>
        <div>
          <img src={props.dogUrl} width={450} height={310} />
        </div>
        <div>
          <img src={props.serviceDog} width={450} height={310} />
        </div>
        <div>
          <img src={props.doggies} width={450} height={310} />
          {/* <div>{props.breeds}</div> */}
        </div>
        <div>멍멍이!</div>
      </S.Wrapper>
    </>
  );
}
