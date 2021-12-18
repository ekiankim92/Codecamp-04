import { gql } from "@apollo/client";

export const FETCH_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      _id
      name
      contents
      price
      createdAt
      seller {
        name
      }
    }
  }
`;

export const FETCH_ITEMS_SOLD_COUNT = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;

export const FETCH_ITEMS_I_BOUGHT = gql`
  query fetchUseditemsIBought($search: String, $page: Int) {
    fetchUseditemsIBought(search: $search, page: $page) {
      _id
      name
      contents
      price
      createdAt
      seller {
        name
      }
    }
  }
`;

export const FETCH_ITEMS_BOUGHT_COUNT = gql`
  query fetchUseditemsCountIBought {
    fetchUseditemsCountIBought
  }
`;
