import * as S from "./reload.style";
import Head from "next/head";

export default function ReloadUI(props) {
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <div>Reload</div>
      Amount: <input type="text" />
      <button onClick={props.onClickPayment}>Reload Amount</button>
      <div>Amount: {props.data?.fetchUserLoggedIn.userPoint.amount}</div>
      <label>Points</label>
      <input type="text" onChange={props.onChangeAmount} />
    </>
  );
}
