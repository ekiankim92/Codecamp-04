import MarketQuestionListUI from "./MarketQuestionList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEM_QUESTIONS } from "./MarketQuestionList.queries";
import {
  IQuery,
  IQueryFetchUseditemQuestionsArgs,
} from "../../../../../commons/types/generated/types";

const MarketQuestionList = () => {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditemQuestions">,
    IQueryFetchUseditemQuestionsArgs
  >(FETCH_USED_ITEM_QUESTIONS, {
    variables: {
      useditemId: String(router.query.marketId),
    },
  });

  return <MarketQuestionListUI data={data} />;
};
export default MarketQuestionList;
