import * as S from "./BoardList.style";
import { getDate } from "../../../../../src/commons/libraries/utils";
import PaginationsPage01 from "../../../commons/paginations/01/Paginations01.container";
import Search01 from "../../../commons/keyword-search/01/search01.container";
import { v4 as uuid4 } from "uuid";
import { ChangeEvent } from "react";
import { IPropsBoardListUI } from "./BoardList.types";

export default function BoardListUI(props: IPropsBoardListUI) {
  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/market_images/image.png";
  };

  return (
    <S.Wrapper>
      <S.SearchWrapper>
        <Search01
          refetch={props.refetch}
          refetchBoardsCount={props.refetchBoardsCount}
          onChangeSearch={props.onChangeSearch}
        />
      </S.SearchWrapper>
      <S.Title>인기 게시물</S.Title>
      <S.InnerWrapper>
        <S.BestWrapper>
          {props.dataBestBoards?.fetchBoardsOfTheBest.map((el: any) => (
            <S.BestRowWrapper key={uuid4()}>
              <S.BestIconDateWrapper>
                <S.IconWrapper>
                  <S.SmileyFace />
                  <S.SmilyFaceCount>{el.likeCount}</S.SmilyFaceCount>
                </S.IconWrapper>
                <S.BestDate>{getDate(el.createdAt)}</S.BestDate>
              </S.BestIconDateWrapper>
              <S.ImageWrapper id={el._id} onClick={props.onClickMoveToDetail}>
                <S.Image
                  src={`https://storage.googleapis.com/${el.images?.[0]}`}
                  onError={onError}
                />
              </S.ImageWrapper>
              <S.BestTitle>{el.title}</S.BestTitle>
              <S.BestWriter>{el.writer}</S.BestWriter>
            </S.BestRowWrapper>
          ))}
        </S.BestWrapper>
        <S.Title>게시물</S.Title>
        <S.Header>
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
        </S.Header>
        <S.Lists>
          {props.data?.fetchBoards.map((el, index) => (
            <S.Row key={uuid4()}>
              <S.IndexNumber>{index + 1}</S.IndexNumber>
              <S.BoardsTitle id={el._id} onClick={props.onClickMoveToDetail}>
                {el.title
                  .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                  .split("@#$%")
                  .map((el) => (
                    <S.SearchBar key={uuid4()} isMatched={props.keyword === el}>
                      {el}
                    </S.SearchBar>
                  ))}
              </S.BoardsTitle>
              <S.BoardsWriter>{el.writer}</S.BoardsWriter>
              <S.BoardsDate>{getDate(el.createdAt)}</S.BoardsDate>
            </S.Row>
          ))}
        </S.Lists>
      </S.InnerWrapper>
      <S.PaginationWrapper>
        <PaginationsPage01
          refetch={props.refetch}
          count={props.count}
          startPage={props.startPage}
          setStartPage={props.setStartPage}
        />
      </S.PaginationWrapper>
      <S.ButtonWrapper>
        <S.CreateBoardButton onClick={props.onClickMoveToBoard}>
          <S.EditPen src="/images/edit_pen.png" />
          게시물 등록하기
        </S.CreateBoardButton>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
