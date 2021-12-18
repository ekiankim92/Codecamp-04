import { gql } from "@apollo/client";

export const RESET_USER_PASSWORD = gql`
  mutation resetUserPassword($password: String!) {
    resetUserPassword(password: $password)
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      userPoint {
        amount
      }
    }
  }
`;

export const FETCH_USED_ITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      _id
      contents
      price
      seller {
        name
      }
    }
  }
`;

export const FETCH_USED_ITEMS_COUNT = gql`
  query fetchUseditemsCountIPicked {
    fetchUseditemsCountIPicked
  }
`;
