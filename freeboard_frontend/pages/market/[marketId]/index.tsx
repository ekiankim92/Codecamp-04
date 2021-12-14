import ProductDetail from "../../../src/components/units/market/detail/ProductDetail.container";
import MarketQuestionWrite from "../../../src/components/units/market/marketQuestion/write/MarketQuestionWrite.container";
import MarketQuestionList from "../../../src/components/units/market/marketQuestion/list/MarketQuestionList.container";

export default function BoardDetailUI() {
  return (
    <>
      <ProductDetail />
      <MarketQuestionWrite />
      <MarketQuestionList />
    </>
  );
}
