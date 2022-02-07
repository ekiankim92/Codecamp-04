import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import Search01 from "../../../commons/keyword-search/01/search01.container";
import { ChangeEvent } from "react";
import { IPropsMarketListUI } from "./MarketList.types";

export default function MarketListUI(props: IPropsMarketListUI) {
  const onError = (event: ChangeEvent<HTMLImageElement>) => {
    event.target.src = "/market_images/image.png";
  };

  return (
    <>
      <S.SearchWrapper>
        <Search01
          refetch={props.refetch}
          onChangeSearch={props.onChangeSearch}
          refetchBoardsCount={props.refetchBoardsCount}
        />
      </S.SearchWrapper>
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={props.onload}
          hasMore={true}
          useWindow={false}
        >
          <S.Header>Today's List</S.Header>
          <S.Outter_Wrapper>
            {props.data?.fetchUseditems.map((el) => (
              <div key={el._id}>
                <S.Wrapper>
                  <S.ImageWrapper onClick={props.onClickDetail(el._id)}>
                    <S.Image
                      src={`https://storage.googleapis.com/${el.images?.[0]}`}
                      onError={onError}
                    />
                  </S.ImageWrapper>
                  <S.PriceWrapper>
                    <div>${el.price}</div>
                  </S.PriceWrapper>
                  <S.NameWrapper>
                    <S.Name>
                      {el.name
                        .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                        .split("@#$%")
                        .map((el) => (
                          <span key={el._id} isMatched={props.keyword === el}>
                            {el}
                          </span>
                        ))}
                    </S.Name>
                  </S.NameWrapper>
                  <S.IconWrapper>
                    <S.CartIcon onClick={props.onClickBasket(el)}>
                      <img src="market_images/cart.png" />
                    </S.CartIcon>
                    <S.PickIcon onClick={props.onClickTogglePick(el._id)}>
                      <img src="market_images/tag.png" />
                    </S.PickIcon>
                    {/* <div>{el.pickedCount}</div> */}
                  </S.IconWrapper>
                  <S.ButtonWrapper>
                    <S.BuyButton onClick={props.onClickPurchase(el._id)}>
                      Buy Now
                    </S.BuyButton>
                  </S.ButtonWrapper>
                </S.Wrapper>
              </div>
            ))}
          </S.Outter_Wrapper>
        </InfiniteScroll>
        <S.LoadMore>
          <S.MoreButton onClick={props.onLoadMore}>
            -----Click For More-----
          </S.MoreButton>
        </S.LoadMore>
      </div>
    </>
  );
}
