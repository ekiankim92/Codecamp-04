import { gql } from "@apollo/client";

export const RELOAD_POINT = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
      balance
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      userPoint {
        amount
      }
    }
  }
`;

export const FETCH_USED_ITEM = gql`
  query fetchUseditems($useditemId: ID!) {
    fetchUseditems(useditemId: $useditemId) {
      useditemAddress {
        zipcode
        address
      }
    }
  }
`;
