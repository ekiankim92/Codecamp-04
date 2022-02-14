import MyPage from "../../../src/components/units/market/mypage/Mypage.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";

const MyPages = () => {
  return <MyPage />;
};
export default withAuth(MyPages);
