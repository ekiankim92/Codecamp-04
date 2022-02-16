import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import Reload from "../../../src/components/units/market/reload/reload.container";

const ReloadPage = () => {
  return <Reload />;
};
export default withAuth(ReloadPage);
