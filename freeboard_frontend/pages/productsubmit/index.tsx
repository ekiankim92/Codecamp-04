import Product from "../../src/components/units/market/product/Product.container";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const MarketPage = () => {
  return <Product />;
};
export default withAuth(MarketPage);
