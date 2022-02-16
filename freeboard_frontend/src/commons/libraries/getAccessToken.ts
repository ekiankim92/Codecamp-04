import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken(
  setMyAccessToken: Dispatch<SetStateAction<string>>
) {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend04.codebootcamp.co.kr/graphql06",
      { credentials: "include" }
    );

    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setMyAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error) {
    if (error instanceof Error) console.log(error.message);
  }
}
