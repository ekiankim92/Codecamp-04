import { withAuth } from "../../src/components/commons/hocs/withAuth";
import OpenAPIPage from "../../src/components/units/openapi/list/OpenapiList.container";

const OpenAPI = () => {
  return <OpenAPIPage />;
};

export default withAuth(OpenAPI);
