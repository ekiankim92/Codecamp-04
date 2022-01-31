import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import Security from "../../../src/components/units/market/security/Security.container";

const SecurityPage = () => {
  return <Security />;
};
export default withAuth(SecurityPage);
