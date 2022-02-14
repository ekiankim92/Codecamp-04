import Basket from "../../../src/components/units/market/basket/Basket.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const BasketPage = () => {
  return <Basket />;
};
export default withAuth(BasketPage);
