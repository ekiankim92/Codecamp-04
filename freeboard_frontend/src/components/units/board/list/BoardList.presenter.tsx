import * as S from "./BoardList.style";
import { getDate } from "../../../../../src/commons/libraries/utils";

export default function BoardListUI(props: IPropsBoardListUI) {
  return (
    <S.Outer_Wrapper>
      <S.Inner_Wrapper>
        <S.Header>
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
        </S.Header>

        <S.Best_List>
          <div>
            {props.data2?.fetchBoardsOfTheBest.map((el: any, index: any) => (
              <S.Row>
                <S.Column>{index + 1}</S.Column>
                <S.Column id={el._id} onClick={props.onClickMoveToBestDetail}>
                  {el.title}
                </S.Column>
                <S.Column>{el.writer}</S.Column>
                <S.Column>{getDate(el.createdAt)}</S.Column>
              </S.Row>
            ))}
          </div>
        </S.Best_List>

        <S.SearchSection>
          <div>
            {/* <img src="/images/word.png"/> */}
            <S.Search_Area type="text" placeholder="제목을 검색해주세요" />
          </div>
          <div>
            <S.Search_Data type="text" placeholder="YYYY.MM.DD - YYYY.MM.DD" />
          </div>
          <div>
            <S.Search_Button>검색하기</S.Search_Button>
          </div>
        </S.SearchSection>

        <S.Header>
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
        </S.Header>

        <S.Lists>
          {props.data?.fetchBoards.map((el, index) => (
            <S.Row key={el._id} id={el._id}>
              <S.Column>{/* <input type="checkbox" /> */}</S.Column>
              <S.Column>{index + 1}</S.Column>
              <S.Column onClick={props.onClickMoveToBoardDetail} id={el._id}>
                {el.title}
              </S.Column>
              <S.Column>{el.writer}</S.Column>
              <S.Column>{getDate(el.createdAt)}</S.Column>
              <S.Column>
                {/* <button id={el._id} onClick={props.onClickDate}>
                  Delete Button
                </button> */}
              </S.Column>
            </S.Row>
          ))}
        </S.Lists>
      </S.Inner_Wrapper>
      <div>
        <span onClick={props.onClickPrevPage}>Previous</span>
        {new Array(10).fill(1).map(
          (_, index) =>
            props.startPage + index <= props.lastPage && (
              <span
                key={props.startPage + index}
                onClick={props.onClickPage}
                id={props.startPage + index}
                style={{ margin: "10px", cursor: "pointer" }}
              >
                {props.startPage + index}
              </span>
            )
        )}
        <span onClick={props.onClickNextPage}>Next Page</span>
      </div>
      <S.Create_Board_Button onClick={props.onClickMoveToBoard}>
        <img src="/images/edit_pen.png" />
        게시물 등록하기
      </S.Create_Board_Button>
    </S.Outer_Wrapper>
  );
}
