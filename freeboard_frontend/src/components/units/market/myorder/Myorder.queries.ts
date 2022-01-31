import { gql } from "@apollo/client";

export const FETCH_ITEMS_I_SOLD = gql`
  query fetchUseditemsISold($search: String, $page: Int) {
    fetchUseditemsISold(search: $search, page: $page) {
      name
      price
      images
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
      name
      price
      images
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

export const FETCH_USED_ITEMS_IPICKED = gql`
  query fetchUseditemsIPicked($search: String, $page: Int) {
    fetchUseditemsIPicked(search: $search, page: $page) {
      name
      price
      images
      createdAt
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
