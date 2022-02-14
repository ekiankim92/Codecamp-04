import MyOrder from "../../../src/components/units/market/myorder/Myorder.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const MyOrderPage = () => {
  return <MyOrder />;
};
export default withAuth(MyOrderPage);
