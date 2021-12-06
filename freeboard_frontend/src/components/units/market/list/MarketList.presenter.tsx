import * as S from "./MarketList.styles";
import InfiniteScroll from "react-infinite-scroller";

// interface IMarketListUIProps {
//     el: string,
//     index: number
// }

export default function MarketListUI(props) {
  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={props.loadMore}
        hasMore={true}
        useWindow={false}
      >
        {props.data?.fetchUseditems.map((el, index) => (
          <div key={el._id}>
            <span>{index + 1}</span>
            <span>{el.name}</span>
            <span>{el.contents}</span>
            <span>{el.price}</span>
            <img src={`https://storage.googleapis.com/${el.images[0]}`} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
