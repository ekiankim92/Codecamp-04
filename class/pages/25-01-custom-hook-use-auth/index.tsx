import { useAuth } from "../../src/components/commons/hooks/useAuth";

export default function CustomHooksUseAuthPage() {
  const { isLoading } = useAuth();
  // 로그인을 안핟면 튕겨주는

  if (isLoading) return <></>;

  return <div>커스텀훅 연습 = 권한분기</div>;
}
