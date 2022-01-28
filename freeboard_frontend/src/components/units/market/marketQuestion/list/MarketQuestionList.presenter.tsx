import MarketQuestionListUIItem from "./MarketQuestionList.presenterItem";
import { v4 as uuidv4 } from "uuid";
import { FETCH_USER_LOGGED_IN } from "./MarketQuestionList.queries";
import { IQuery } from "../../../../../commons/types/generated/types";
import { useQuery } from "@apollo/client";
import { IPropsMarketQuestionListUI } from "./MarketQuestionList.types";

export default function MarketQuestionListUI(
  props: IPropsMarketQuestionListUI
) {
  if (!props.data) return <div />;

  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <>
      {props.data?.fetchUseditemQuestions.map((el: any) => (
        <MarketQuestionListUIItem key={uuidv4()} el={el} userData={userData} />
      ))}
    </>
  );
}
