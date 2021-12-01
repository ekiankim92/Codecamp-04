import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;

function LoginSuccessPage(props) {
  // const { accessToken } = useContext(GlobalContext);
  // const router = useRouter();

  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  // if (!accessToken) {
  //   alert("로그인 한 사람만 입장 가능합니다. 로그인을 먼저 해주세요");
  //   router.push("/22-01-login");
  // }
  // 이런식으로 쓰이게 되면 바뀐 장면을 일일히 다 들어가서 하나하나씩 다 바꿔줘야함

  return (
    <>
      <div>로그인에 성공하였습니다</div>
      <div>{data?.fetchUserLoggedIn.name} 님 환영합니다!</div>
    </>
  );
}

export default withAuth(LoginSuccessPage);
