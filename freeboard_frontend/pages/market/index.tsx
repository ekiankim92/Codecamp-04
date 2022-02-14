import MarketList from "../../src/components/units/market/list/MarketList.container";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const MarketPage = () => {
  return <MarketList />;
};
export default withAuth(MarketPage);
