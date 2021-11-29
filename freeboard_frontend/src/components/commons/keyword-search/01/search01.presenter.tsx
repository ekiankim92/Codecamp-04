import * as S from "./search01.style";

export default function SearchUI(props) {
  return (
    <S.SearchSection>
      <div>
        <S.Search_Area
          type="text"
          placeholder="제목을 검색해주세요"
          onChange={props.onChangeSearchbar}
        />
      </div>
      <div>
        <S.Search_Data type="text" placeholder="YYYY.MM.DD - YYYY.MM.DD" />
      </div>
      <div>
        <S.Search_Button>검색하기</S.Search_Button>
      </div>
    </S.SearchSection>
  );
}
