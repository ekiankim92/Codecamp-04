import * as S from "./BoardList.style";
import { getDate } from "../../../../../src/commons/libraries/utils";
import PaginationsPage01 from "../../../commons/paginations/01/Paginations01.container";
import Search01 from "../../../commons/keyword-search/01/search01.container";
import { v4 as uuid4 } from "uuid";

export default function BoardListUI(props) {
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
        <Search01
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeSearch={props.onChangeSearch}
        />
        <S.Header>
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
        </S.Header>
        <S.Lists>
          {props.data?.fetchBoards.map((el, index) => (
            <S.Row key={el._id}>
              <S.Column>{/* <input type="checkbox" /> */}</S.Column>
              <S.Column>{index + 1}</S.Column>
              <S.Column onClick={props.onClickMoveToBoardDetail} id={el._id}>
                {el.title
                  .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                  .split("@#$%")
                  .map((el: any) => (
                    <S.SearchBar key={uuid4()} isMatched={props.keyword === el}>
                      {el}
                    </S.SearchBar>
                  ))}
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
      <PaginationsPage01
        refetch={props.refetch}
        count={props.count}
        startPage={props.startPage}
        setStartPage={props.setStartPage}
      />
      <S.Create_Board_Button onClick={props.onClickMoveToBoard}>
        <img src="/images/edit_pen.png" />
        게시물 등록하기
      </S.Create_Board_Button>
    </S.Outer_Wrapper>
  );
}
