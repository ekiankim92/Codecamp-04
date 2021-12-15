import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";
import DOMPurify from "dompurify";
import Search01 from "../../../commons/keyword-search/01/search01.container";

// interface IMarketListUIProps {
//     el: string,
//     index: number
// }

export default function MarketListUI(props) {
  return (
    <>
      <S.Search_Wrapper>
        <Search01
          refetch={props.refetch}
          onChangeSearch={props.onChangeSearch}
          refetchBoardsCount={props.refetchBoardsCount}
        />
      </S.Search_Wrapper>
      <div>
        <InfiniteScroll
          pageStart={0}
          // loadMore={props.onLoadMore}
          loadMore={props.onload}
          hasMore={true}
          useWindow={false}
        >
          <S.Outter_Wrapper>
            {props.data?.fetchUseditems.map((el, index) => (
              <div key={el._id}>
                <S.Wrapper>
                  <span>Number: {index + 1}</span> <br />
                  <span>
                    Name:{" "}
                    {el.name
                      .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                      .split("@#$%")
                      .map((el) => () => (
                        <input key={el._id} isMatched={props.keyword === el}>
                          {el}
                        </input>
                      ))}
                  </span>{" "}
                  <br />
                  {process.browser ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(el.contents),
                      }}
                    ></div>
                  ) : (
                    <div></div>
                  )}
                  <span>Price: ${el.price}</span> <br />
                  <span>Seller Name: {el.seller.name}</span> <br />
                  <img
                    onClick={props.onClickDetail(el._id)}
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  />
                  <S.Cart_Image onClick={props.onClickBasket(el)}>
                    <img src="market_images/cart.png" />
                  </S.Cart_Image>
                  <button onClick={props.onClickPurchase(el._id)}>
                    Purchase
                  </button>
                  <div>
                    <img
                      src="market_images/tag.png"
                      onClick={props.onClickTogglePick(el._id)}
                    />
                  </div>
                  <div>{el.pickedCount}</div>
                </S.Wrapper>
              </div>
            ))}
          </S.Outter_Wrapper>
          {/* {props.data?.fetchUseditems.map((el, index) => (
          <div key={el._id}>
            <S.Wrapper>
              <span>{index + 1}</span>
              <span>{el.name}</span>
              <span>{el.contents}</span>
              <span>{el.price}</span>
              <img src={`https://storage.googleapis.com/${el.images[0]}`} />
            </S.Wrapper>
          </div>
        ))} */}
        </InfiniteScroll>
        <div>------------------------------------------------------</div>
        <button onClick={props.onLoadMore}>SEE MORE!!!!!</button>
        <div>------------------------------------------------------</div>
      </div>
    </>
  );
}
