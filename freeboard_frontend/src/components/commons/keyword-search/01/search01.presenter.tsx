import * as S from "./search01.style";
import { IPropsSearchUI } from "./search01.types";

export default function SearchUI(props: IPropsSearchUI) {
  return (
    <S.SearchSection>
      <div>
        <S.SearchIconWrapper>
          <S.SearchImage src="/market_images/search.png" />
        </S.SearchIconWrapper>
        <S.SearchArea
          type="text"
          placeholder="search by name"
          onChange={props.onChangeSearchbar}
        />
      </div>
      {/* <div>
        <S.Search_Data type="text" placeholder="YYYY.MM.DD - YYYY.MM.DD" />
      </div> */}
      {/* <div>
        <S.Search_Button>검색하기</S.Search_Button>
      </div> */}
    </S.SearchSection>
  );
}
