import * as S from "./BoardList.style";
import { getDate } from "../../../../../src/commons/libraries/utils";
import PaginationsPage01 from "../../../commons/paginations/01/Paginations01.container";
import Search01 from "../../../commons/keyword-search/01/search01.container";
import { v4 as uuid4 } from "uuid";
import { ChangeEvent } from "react";

export default function BoardListUI(props) {
  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/market_images/image.png";
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <Search01
        refetch={props.refetch}
        refetchBoardsCount={props.refetchBoardsCount}
        onChangeSearch={props.onChangeSearch}
      />
      <S.Inner_Wrapper>
        <S.BestWrapper>
          <div>
            {props.dataBestBoards?.fetchBoardsOfTheBest.map(
              (el: any, index: number) => (
                <S.Row key={uuid4()}>
                  <S.Column>{index + 1}</S.Column>
                  <S.Column id={el._id} onClick={props.onClickMoveToDetail}>
                    {el.title}
                  </S.Column>
                  <S.Column>{el.writer}</S.Column>
                  <S.Column>{getDate(el.createdAt)}</S.Column>
                  <div>
                    <img
                      src={`https://storage.googleapis.com/${el.images?.[0]}`}
                      style={{ width: "50px", height: "50px" }}
                      onError={onError}
                    />
                  </div>
                </S.Row>
              )
            )}
          </div>
          <S.Carousel {...settings}>
            <div>
              <img src="/market_images/cart.png" />
            </div>
            <div>
              <img src="/market_images/cart.png" />
            </div>
            <div>
              <img src="/market_images/cart.png" />
            </div>
            <div>
              <img src="/market_images/cart.png" />
            </div>
          </S.Carousel>
        </S.BestWrapper>
        <S.Header>
          <div>번호</div>
          <div>제목</div>
          <div>작성자</div>
          <div>날짜</div>
        </S.Header>
        <S.Lists>
          {props.data?.fetchBoards.map((el, index) => (
            <S.Row key={uuid4()}>
              <S.Column>{index + 1}</S.Column>
              <div id={el._id} onClick={props.onClickMoveToDetail}>
                {el.title
                  .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                  .split("@#$%")
                  .map((el) => (
                    <S.SearchBar key={uuid4()} isMatched={props.keyword === el}>
                      {el}
                    </S.SearchBar>
                  ))}
              </div>
              <S.Column>{el.writer}</S.Column>
              <S.Column>{getDate(el.createdAt)}</S.Column>
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
    </S.Wrapper>
  );
}
